import Category from "./Category";

const FeaturedCategory = () => {
  return (
    <>
      <section className="mt-32">
        <h1 className="text-5xl text-custom font-bold  text-center">
          Featured Category
        </h1>

        <div className="flex mt-24 px-56 justify-center flex-wrap gap-x-32 gap-y-10">
          <Category
            img={
              "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3B1fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            }
            title={"CPU"}
          />
          <Category
            img={
              "https://images.unsplash.com/photo-1562976540-1502c2145186?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFtfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            }
            title={"Ram"}
          />
          <Category
            img={
              "https://images.unsplash.com/photo-1562408590-e32931084e23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW90aGVyYm9hcmR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            }
            title={"Motherboard"}
          />
          <Category
            img={
              "https://images.unsplash.com/photo-1551645120-d70bfe84c826?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80"
            }
            title={"Monitor"}
          />
          <Category
            img={
              "https://images.unsplash.com/photo-1659856577105-c8ec1a364aa0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29yc2FpciUyMHBvd2VyJTIwc3VwcGx5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            }
            title={"Power Supply"}
          />
          <Category
            img={
              "https://images.unsplash.com/photo-1531492746076-161ca9bcad58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGRkfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            }
            title={"Storage"}
          />
          <Category
            img={
              "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW91c2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            }
            title={"Others"}
          />
        </div>
      </section>
    </>
  );
};

export default FeaturedCategory;
