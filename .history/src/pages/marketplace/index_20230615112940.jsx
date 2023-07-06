import React from "react";

import Card from "../../components/marketplace/card";

function MarketPlace() {
  return (
    <div className="m-5">
      <div className="flex flex-wrap justify-center md:justify-start">
        <button className="text-xs m-2 md:mr-1  text-gray-600 bg-white w-28 py-2.5 shadow-md rounded-full hover:text-blue-500 focus:text-blue-500">
          All Categories
        </button>
        <button className="text-xs m-2 md:mr-1 text-gray-600 bg-white w-28 py-2.5 shadow-md rounded-full hover:text-blue-500 focus:text-blue-500">
          Website SEO
        </button>
        <button className="text-xs m-2 md:mr-1 text-gray-600 bg-white w-28 py-2.5 shadow-md rounded-full hover:text-blue-500 focus:text-blue-500">
          Website SEO
        </button>
        <button className="text-xs m-2 md:mr-1 text-gray-600 bg-white w-28 py-2.5 shadow-md rounded-full hover:text-blue-500 focus:text-blue-500">
          Website SEO
        </button>
        <button className="text-xs m-2 md:mr-1 text-gray-600 bg-white w-28 py-2.5 shadow-md rounded-full hover:text-blue-500 focus:text-blue-500 focus:ring-blue-500">
          Website SEO
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-3">
        <Card />
      </div>
    </div>
  );
}

export default MarketPlace;
