import Category from "./Category";

const FeaturedCategory = () => {
  return (
    <>
      <section className="mt-32">
        <h1 className="text-5xl text-custom font-bold  text-center">
          Featured Category
        </h1>

        <div className="flex mt-24 px-32 justify-center flex-wrap gap-x-64 gap-y-10">
          <Category />
          <Category />
          <Category />
          <Category />
          <Category />
          <Category />
        </div>
      </section>
    </>
  );
};

export default FeaturedCategory;
