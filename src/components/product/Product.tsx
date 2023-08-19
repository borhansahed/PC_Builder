import { builderContext } from "@/context/Builder.context";
import { IProduct } from "@/types/product.interface";
import { Card, Image } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";

const { Meta } = Card;
interface IProps {
  product: IProduct;
  flag: boolean;
}
const Product = ({ product, flag = false }: IProps) => {
  const { dispatch } = useContext(builderContext);
  const router = useRouter();
  const formattedKey = product.category.replace(/\s+/g, ''); 

  return (
    <>
      {flag ? (
        <Card
          className="w-[320px] h-auto"
          hoverable
          cover={<Image src={product.image} alt="product" height={200} />}
        >
          <Meta title={product.productname} description={product.category} />
          <p className="text-lg text-custom font-bold mt-2">{product.price}</p>
          <p className="text-base font-medium">{product.status}</p>
          <p>{product.rating}</p>
          <button
            onClick={() => {
              dispatch({ type: `${formattedKey}`, value: product });
              router.push("/pcbuilder");
            }}
            className="bg-custom w-full text-white mt-6 px-4 py-3 rounded-md font-bold"
          >
            Add To Builder
          </button>
        </Card>
      ) : (
        <>
          <Link href={`/category/product/${product._id}`}>
            <Card
              className="w-[320px] h-auto"
              hoverable
              cover={<Image src={product.image} alt="product" height={200} />}
            >
              <Meta
                title={product.productname}
                description={product.category}
              />
              <p className="text-lg text-custom font-bold mt-2">
                {product.price}
              </p>
              <p className="text-base font-medium">{product.status}</p>
              <p>{product.rating}</p>
            </Card>
          </Link>
        </>
      )}
    </>
  );
};

export default Product;
