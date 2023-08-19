import { IProduct } from "@/types/product.interface";
import { createContext, useReducer } from "react";

export const builderContext = createContext<any>({});

interface IProps {
  children: React.ReactNode;
}

export interface IState {
  [key: string]: IProduct[];
}

const initialState: IState = {
  CPU: [],
  Ram: [],
  Motherboard: [],
  Storage: [],
  PowerSupply: [],
  Monitor: [],
  Others: [],
};

type ActionType =
  | "CPU"
  | "Ram"
  | "Motherboard"
  | "Storage"
  | "Power Supply"
  | "Monitor"
  | "Others";

type Action = {
  type: ActionType;
  value: IProduct;
};

const reducer = (state: IState, action: Action) => {
  switch (action.type) {
    case "CPU":
    case "Ram":
    case "Motherboard":
    case "Storage":
    case "Power Supply":
    case "Monitor":
    case "Others": {
      return {
        ...state,
        [action.type]: [...state[action.type], action.value],
      };
    }

    default:
      return state;
  }
};

const BuilderContext = ({ children }: IProps) => {
  const [state, dispatch] = useReducer<any>(reducer, initialState);
  return (
    <>
      <builderContext.Provider value={{ state, dispatch }}>
        {children}
      </builderContext.Provider>
    </>
  );
};

export default BuilderContext;
