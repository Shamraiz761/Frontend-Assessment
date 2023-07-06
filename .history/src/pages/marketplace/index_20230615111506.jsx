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
        <button className="text-xs m-2 md:mx-2 text-gray-600 bg-white w-28 py-2.5 shadow-md rounded-full hover:text-blue-500 focus:text-blue-500 focus:ring-blue-500">
          Website SEO
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-3">
        <div className="bg-white p-3 grid grid-cols-3 rounded-md ">
          <img src={imgC} className="w-40 h-40 rounded-md" />
          <div className="col-span-2">
            <div className="flex flex-row justify-between">
              <h1 className="font-medium text-sm">Website SEO</h1>
              <p className="bg-blue-100 px-2 py-1 text-sm rounded-sm text-blue-500">
                $500
              </p>
            </div>
            <p className="my-2 text-xs text-gray-400 font-extralight">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatem aut deserunt dolorum mollitia rem. Quasi atque,
              consequuntur quo aspernatur odit possimus corporis perspiciatis
              rem! Itaque iure ab quasi obcaecati impedit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarketPlace;
