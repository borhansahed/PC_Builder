import { Image } from "antd";
import Link from "next/link";
import React from "react";

const category = [
  {
    image:
      "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3B1fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    title: "CPU",
    key: "1",
  },
  {
    image:
      "https://images.unsplash.com/photo-1562408590-e32931084e23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW90aGVyYm9hcmR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    title: "Motherboard",
    key: "2",
  },
  {
    image:
      "https://images.unsplash.com/photo-1551645120-d70bfe84c826?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
    title: "Monitor",
    key: "3",
  },
  {
    image:
      "https://images.unsplash.com/photo-1659856577105-c8ec1a364aa0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29yc2FpciUyMHBvd2VyJTIwc3VwcGx5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    title: "Power Supply",
    key: "4",
  },
  {
    image:
      "https://images.unsplash.com/photo-1531492746076-161ca9bcad58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGRkfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    title: "Storage",
    key: "5",
  },
  {
    image:
      "https://images.unsplash.com/photo-1562976540-1502c2145186?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFtfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    title: "Ram",
    key: "6",
  },
  {
    image:
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW91c2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    title: "Others",
    key: "7",
  },
];
const BuilderCategory = () => {
  return (
    <>
      <section className="flex flex-col mt-14 items-center gap-y-10">
        {category.map((item) => {
          return (
            <>
              <article
                key={item.key}
                className="flex justify-between items-center rounded-lg w-[500px] border border-custom"
              >
                <div className="flex gap-6">
                  <Image
                    className="rounded-lg"
                    src={item.image}
                    alt="category"
                    width={100}
                    height={100}
                  />
                  <h1 className=" text-custom font-bold ">{item.title}</h1>
                </div>

                <Link href={`/pcbuilder/category/${item.title}`}>
                  <button className="bg-custom text-white h-10  px-4  rounded-md font-bold mr-3">
                    Choose
                  </button>
                </Link>
              </article>
            </>
          );
        })}
      </section>
    </>
  );
};

export default BuilderCategory;
