import BuilderCategory from "@/components/pcbuilder/BuilderCategory";
import { builderContext } from "@/context/Builder.context";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";

const category = [
  "CPU",
  "Ram",
  "Motherboard",
  "Storage",
  "PowerSupply",
  "Monitor",
  "Others",
];
const PcBuilder = () => {
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const router = useRouter();
  const { state } = useContext(builderContext);

  useEffect(() => {
    const isComplete = category.every((item) => {
      return state[`${item}`].length !== 0;
    });
    setIsCompleted(isComplete);
  }, [state]);

  return (
    <>
      <h1 className="text-center mt-24 font-bold text-custom text-4xl">
        PC BUILDER
      </h1>

      <BuilderCategory components={state} />

      <div className="flex justify-center items-center">
        <button
          onClick={() => {
            router.push("/");
          }}
          className={` ${
            !isCompleted && "disable"
          } bg-custom  w-1/4  disabled:opacity-75 text-white mt-8 px-4 py-3 rounded-md font-bold`}
        >
          Completed
        </button>
      </div>
    </>
  );
};

export default PcBuilder;
