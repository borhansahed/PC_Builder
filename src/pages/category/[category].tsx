import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import React from "react";
import { Card, Image } from "antd";
import { IProduct } from "@/types/product.interface";

const { Meta } = Card;

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
      <section className="flex justify-center items-center mt-24 gap-44">
        {product?.map((item: IProduct) => {
          return (
            <>
              <Card
                className="w-[400px]"
                hoverable
                cover={<Image src={item.Image} alt="example" height={200} />}
              >
                <h1>{item.Category}</h1>
              </Card>
            </>
          );
        })}
      </section>
    </div>
  );
};

export default CategoryItem;

export const getStaticPaths = async () => {
  const res = await fetch(`http://localhost:3000/api/product`);
  const products = await res.json();
  const paths = products.data.map((product: IProduct) => ({
    params: { category: product.Category },
  }));

  return { paths, fallback: false };
};
export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;

  const data = await fetch(
    `http://localhost:3000/api/product?Category=${params?.category}`
  );
  const product = await data.json();

  return {
    props: {
      product: product.data,
    },
  };
};
