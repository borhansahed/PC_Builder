import { IProduct } from "@/types/product.interface";
import Product from "./Product";

interface IProps {
  products: IProduct[];
}
const FeaturedProduct = ({ products }: IProps) => {
  return (
    <>
      <section className="mt-32">
        <h1 className="text-5xl text-custom font-bold  text-center">
          Featured Product
        </h1>

        <div className="flex mt-24 px-32 justify-center flex-wrap gap-x-32 gap-y-10">
          {products.slice(0, 6).map((item: IProduct) => {
            return (
              <>
                <Product key={item._id} product={item} flag={false} />
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};
export default FeaturedProduct;
