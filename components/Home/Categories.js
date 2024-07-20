import React from "react";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";

const Categories = () => {
  
  const products = [
    {
      name: "True Wireless Headphone",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget nunc nec libero ultrices.",
      price: "99$",
      img: "",
    },
  ]

  return (
    <section className="flex justify-center items-center w-full py-16 hero">
      <div className="flex flex-col justify-center items-center gap-5 w-[90vw] lg:w-[75vw]">
        <h1 className="lg:text-4xl text-3xl font-bold self-start">Trending Products</h1>
            <div className="lg:grid lg:grid-cols-2 flex flex-col items-center justify-center gap-5 mt-5 card p-5 rounded-xl">
            <div className="flex justify-center items-center slow-scale">
                <img
                  src="/headphone4.png"
                  alt="hero"
                  className="max-h-[400px] transition-transform transform hover:scale-110 slow-scale"
                />
              </div>
              <div className="flex flex-col justify-center items-center gap-4">
                <h1 className="text-3xl lg:text-4xl font-semibold self-start">
                True Wireless Headphone
                </h1>
                <h2 className="text-xl font-medium self-start">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget nunc nec libero ultrices.
                </h2>
                <h3 className="text-2xl font-semibold self-start">{`99$`}</h3>
                <div className="flex justify-start items-center gap-5 self-start">
                  <FaStar className="transition-transform transform hover:scale-110 rating"/>
                  <FaStar className="transition-transform transform hover:scale-110 rating"/>
                  <FaStar className="transition-transform transform hover:scale-110 rating"/>
                  <FaStar className="transition-transform transform hover:scale-110 rating"/>
                  <FaStarHalf className="transition-transform transform hover:scale-110 rating"/>
                </div>
                <button className="px-6 py-3 font-semibold text-xl rounded-lg border-0 self-start transition-transform transform hover:scale-110 btnbuy">
                  Buy Now
                </button>
              </div>
            </div>
          <button className="px-6 py-3 font-semibold text-xl rounded-lg border-0 text-center transition-transform transform hover:scale-110 btncat">
                  View More
                </button>
      </div>
    </section>
  );
};

export default Categories;