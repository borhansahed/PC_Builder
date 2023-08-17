import Product from "./Product";

const FeaturedProduct = () => {
  return (
    <>
      <section className="mt-32">
        <h1 className="text-5xl text-custom font-bold  text-center">
          Featured Product
        </h1>

        <div className="flex mt-24 px-32 justify-center flex-wrap gap-x-64 gap-y-10">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </section>
    </>
  );
};

export default FeaturedProduct;
