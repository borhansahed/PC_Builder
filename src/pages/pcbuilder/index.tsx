import BuilderCategory from "@/components/pcbuilder/BuilderCategory";
import { builderContext } from "@/context/Builder.context";
import React, { useContext } from "react";

const PcBuilder = () => {
  const { state } = useContext(builderContext);

  return (
    <>
      <h1 className="text-center mt-24 font-bold text-custom text-4xl">
        PC BUILDER
      </h1>

      <BuilderCategory components={state} />
    </>
  );
};

export default PcBuilder;
