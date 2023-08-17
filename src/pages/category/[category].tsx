import { useRouter } from "next/router";
import React from "react";

const CategoryItem = () => {
  const router = useRouter();

  return (
    <div>
      <h1>Hello CategoryItem {router.query.category}</h1>
    </div>
  );
};

export default CategoryItem;
