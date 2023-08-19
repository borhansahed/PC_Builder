import { IProduct } from "@/types/product.interface";
import { Image } from "antd";
import { GetStaticPaths, GetStaticProps } from "next";

interface IProps {
  product: IProduct;
}
const ProductDetails = ({ product }: IProps) => {
  const {
    productname,
    rating,
    features,
    reviews,
    status,
    description,
    category,
    price,
  } = product;
  return (
    <>
      <article className="flex justify-center   mt-16 gap-32">
        <div>
          <Image
            className="rounded-lg object-contain"
            src={product.image}
            alt="product"
            height={450}
          />

          <p className="text-2xl text-custom mt-6 font-medium">Reviews:</p>
          <ul>
            {reviews?.map((item: string) => {
              return (
                <li className="text-base" key={(Math.random() * 103) / 3}>
                  * {item}
                </li>
              );
            })}
          </ul>
          <button className="bg-custom text-white mt-6 px-4 py-3 rounded-md font-bold">
            Add To PC Builder
          </button>
        </div>

        <div className="text-lg font-medium mt-5">
          <h1 className="text-2xl font-bold text-custom mb-4">{productname}</h1>
          <p>{category}</p>
          <p>{status}</p>
          <p>{price}</p>
          <p className="w-64">{description}</p>
          <p className="text-custom font-bold">{rating}</p>
          <p className="text-2xl text-custom mt-8 font-medium">Features:</p>
          <ul>
            {features?.map((item: string) => {
              return (
                <li className="text-base" key={(Math.random() * 103) / 3}>
                  * {item}
                </li>
              );
            })}
          </ul>
        </div>
      </article>
    </>
  );
};

export default ProductDetails;

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`http://localhost:3000/api/product`);
  const products = await res.json();
  const paths = products.data.map((product: IProduct) => ({
    params: { id: product._id },
  }));

  return { paths, fallback: false };
};
export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;

  const data = await fetch(`http://localhost:3000/api/product/${params?.id}`);
  const product = await data.json();
  console.log(product);

  return {
    props: {
      product: product.data,
    },
  };
};
