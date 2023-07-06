import { AiOutlineClockCircle } from "react-icons/ai";

import React from "react";

import imgC from "../../assets/images/dashboard-back.png";

function Card() {
  return (
    <div className="bg-white p-3 grid grid-cols-3 rounded-md ">
      <img src={imgC} className="w-40 h-36 rounded-lg" />
      <div className="col-span-2">
        <div className="flex flex-row justify-between items-center">
          <h1 className="font-medium text-sm">Website SEO</h1>
          <p className="bg-blue-100 px-2 py-1 text-sm rounded-sm text-blue-500">
            $500
          </p>
        </div>
        <p className="my-2 text-xs text-gray-400 font-extralight">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
          aut deserunt dolorum mollitia rem. Quasi atque, consequuntur quo
          aspernatur odit possimus corporis perspiciatis rem! Itaque iure ab
          quasi obcaecati impedit.
        </p>
        <div className="flex flex-row justify-between items-center">
          <p className="font-light text-gray-400 text-xs flex flex-row">
            <AiOutlineClockCircle className="text-blue-600 text-sm mt- mr-1" />
            Delivery: 1 Week
          </p>
          <button className="bg-blue-600 w-20 py-1.5 text-sm rounded-full text-white">
            View
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
