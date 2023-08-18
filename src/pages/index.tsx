import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";
import banner from "../../public/pcbuilder.png";
import FeaturedProduct from "@/components/product/FeaturedProduct";
import FeaturedCategory from "@/components/category/FeaturedCategory";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Image
        className="object-fill
         w-[100%] h-[800px]"
        src={banner}
        alt="banner"
      />
      <FeaturedProduct />
      <FeaturedCategory />
    </>
  );
}
