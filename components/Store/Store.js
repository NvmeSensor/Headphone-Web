"use client";
import React, { useState } from "react";
import { Categories, Products } from "@/data/store";

const Store = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCheckboxChange = (event) => {
    const category = event.target.value;
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const filteredProducts = Products.filter((product) =>
    selectedCategories.length === 0 || selectedCategories.includes(product.category)
  );

  return (
    <section className="flex flex-col justify-between min-h-screen w-full py-10 hero">
      <div className="flex justify-center items-start w-full">
        <div className="grid grid-cols-1 lg:grid-cols-4 items-start justify-center gap-5 w-[90vw] lg:w-[75vw] mt-5">
          <div className="col-span-1 flex flex-col justify-start items-center gap-3 p-4 rounded-xl filter lg:sticky lg:top-3">
            <h1 className="text-xl font-medium self-start">Filter</h1>
            <div className="flex flex-col justify-start items-start gap-2 self-start">
              {Categories.map((category, index) => (
                <div key={index} className="text-lg flex gap-2">
                  <input
                    type="checkbox"
                    id={category.name}
                    name={category.name}
                    value={category.name}
                    onChange={handleCheckboxChange}
                  />
                  <p>{category.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-3 flex justify-center items-center p-4 rounded-xl product">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 justify-center items-center gap-4">
              {filteredProducts.map((product, index) => (
                <div key={index} className="flex flex-col justify-center items-center gap-2 p-3 rounded-lg cardbody">
                  <div>
                    <img
                      src={product.img}
                      alt="hero"
                      className="h-[200px] w-auto transition-transform transform hover:scale-110 slow-scale"
                    />
                  </div>
                  <div className="flex flex-col justify-center items-center gap-2 p-2">
                    <h1 className="text-2xl font-semibold self-start">{product.name}</h1>
                    <p className="text-md font-medium">{product.desc}</p>
                    <p className="text-2xl font-medium self-start">{product.price}</p>
                    <button className="px-6 py-3 font-semibold text-xl rounded-lg border-0 self-start transition-transform transform hover:scale-110 btn">
                      Buy Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Store;