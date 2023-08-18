import { IProduct } from "@/types/product.interface";
import { Card, Image } from "antd";
import Link from "next/link";

const { Meta } = Card;
interface IProps {
  product: IProduct;
}
const Product = ({ product }: IProps) => {
  return (
    <>
      <Link href={`/category/product/${product._id}`}>
        <Card
          className="w-[320px] h-auto"
          hoverable
          cover={<Image src={product.image} alt="product" height={200} />}
        >
          <Meta title={product.productname} description={product.category} />
          <p className="text-lg text-custom font-bold mt-2">{product.price}</p>
          <p className="text-base font-medium">{product.status}</p>
          <p>{product.rating}</p>
        </Card>
      </Link>
    </>
  );
};

export default Product;
