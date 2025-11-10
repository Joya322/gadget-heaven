import { NavLink, useLoaderData } from "react-router-dom";
import Gadget from "../Gadget/Gadget";
import { useState } from "react";

const Gadgets = () => {
  const allProducts = useLoaderData();

  const [activeCategory, setActiveCategory] = useState("All Product");

  const filteredProducts = activeCategory === "All Product" ? allProducts : allProducts.filter((product) => product.category === activeCategory);

  const buttonNames = [
    "All Product",
    "Laptops",
    "Phones",
    "Accessories",
    "MacBook",
    "Iphone",
  ];
  return (
    <div className="w-11/12 mx-auto p-4">
      <h2 className="text-4xl text-[rgba(11,11,11,1)] font-bold text-center mb-12">
        Explore Cutting-Edge Gadgets
      </h2>

      <div className="grid grid-cols-[200px_1fr] gap-5 p-2">
        <div className="left-div flex flex-col gap-4 bg-white rounded-2xl border border-[rgba(9,8,15,0.1)] p-6 shadow-md h-[420px]">
          {buttonNames.map((buttonName) => (
            <button
              onClick={() => setActiveCategory(buttonName)}
              className={`btn normal-case text-lg rounded-[32px] ${
                activeCategory === buttonName
                  ? "text-white bg-[rgba(149,56,226,1)]"
                  : "text-[rgba(9,8,15,0.6)] bg-[rgba(9,8,15,0.05)]"
              }`}
              key={buttonName}
            >
              {buttonName}
            </button>
          ))}
        </div>
        <div className="right-div grid grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <Gadget product={product} key={product.product_id}></Gadget>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gadgets;
