import Image from "next/image";
import banner from "../../public/pcbuilder.png";
import FeaturedProduct from "@/components/product/FeaturedProduct";
import FeaturedCategory from "@/components/category/FeaturedCategory";
import { IProduct } from "@/types/product.interface";
interface IProps {
  products: IProduct[];
}
export default function Home({ products }: IProps) {
  return (
    <>
      <Image
        className="object-cover
         w-[100%] h-[800px]"
        src={banner}
        alt="banner"
      />
      <FeaturedProduct products={products} />
      <FeaturedCategory />
    </>
  );
}

export const getStaticProps = async () => {
  const data = await fetch(`http://localhost:3000/api/product`);
  const product = await data.json();
  return {
    props: {
      products: product.data,
    },
  };
};
