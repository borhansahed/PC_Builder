import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import React from "react";
import { Card, Image } from "antd";
import { IProduct } from "@/types/product.interface";
import Product from "@/components/product/Product";

interface IProps {
  product: IProduct[];
}

const CategoryItem = ({ product }: IProps) => {
  const router = useRouter();
  return (
    <div className="mt-12">
      <h1 className="text-custom text-4xl text-center font-bold">
        {router.query.category}
      </h1>
      <section className="flex justify-center items-center flex-wrap mt-24 gap-x-32 gap-y-20 px-44">
        {product?.map((item: IProduct) => {
          return (
            <>
              <Product key={item._id} product={item} flag={false} />
            </>
          );
        })}
      </section>
    </div>
  );
};

export default CategoryItem;

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`http://localhost:3000/api/product`);
  const products = await res.json();
  const paths = products.data.map((product: IProduct) => ({
    params: { category: product.category },
  }));

  return { paths, fallback: false };
};
export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;

  const data = await fetch(
    `http://localhost:3000/api/product?category=${params?.category}`
  );
  const product = await data.json();

  return {
    props: {
      product: product.data,
    },
  };
};
