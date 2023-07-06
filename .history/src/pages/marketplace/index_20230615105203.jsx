import React from "react";
import imgC from "../../assets/images/dashboard-back.png";
function MarketPlace() {
  return (
    <div className="m-5">
      <div className="flex flex-wrap justify-center md:justify-start">
        <button className="text-xs m-2 md:mx-0  text-gray-600 bg-white w-28 py-2.5 shadow-md rounded-full hover:text-blue-500 focus:text-blue-500">
          All Categories
        </button>
        <button className="text-xs m-2 md:mx-2 text-gray-600 bg-white w-28 py-2.5 shadow-md rounded-full hover:text-blue-500 focus:text-blue-500">
          Website SEO
        </button>
        <button className="text-xs m-2 md:mx-2 text-gray-600 bg-white w-28 py-2.5 shadow-md rounded-full hover:text-blue-500 focus:text-blue-500">
          Website SEO
        </button>
        <button className="text-xs m-2 md:mx-2 text-gray-600 bg-white w-28 py-2.5 shadow-md rounded-full hover:text-blue-500 focus:text-blue-500">
          Website SEO
        </button>
        <button className="text-xs m-2 md:mx-2 text-gray-600 bg-white w-28 py-2.5 shadow-md rounded-full hover:text-blue-500 focus:text-blue-500">
          Website SEO
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-3 grid grid-cols-3 ">
          <img src={imgC} className="w-48 h-48 rounded-md" />
        </div>
      </div>
    </div>
  );
}

export default MarketPlace;
