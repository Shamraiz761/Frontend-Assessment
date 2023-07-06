import React, { useState } from "react";

import "./index.css";
import Profile from "../../assets/images/Ellipse 1631.png";

function Home() {
  return (
    <div className="mr-3">
      <div className="m-5  w-[11/12] md:h-72 h-[360px]  bg-white">
        <div className="dashboard-cover-iamge h-[150px]  w-[100%]"></div>
        <div className="grid lg:grid-cols-2 grid-cols-1 md:grid-cols-2 flex-row justify-between flex-wrap">
          <div className="ml-12">
            <img src={Profile} className="h-32 w-32 mt-[-65px]  " />
            <h1 className="text-blue-600 font-semibold text-sm ml-[-15px] mt-2">
              Muhammad Shamraiz
            </h1>
            <p className="text-gray-400 text-xs font-thin ml-[-15px]">
              shamirajpoot@gmail.com
            </p>
          </div>
          <div className="grid my-3 grid-cols-2 lg:grid-cols-4 md:justify-end justify-between mx-8 items-center ">
            <Link
              to="/tasks"
              className="btn border  rounded-full w-24 lg:w-28 m-1  px-4 py-2 bg-blue-600 text-sm  text-white"
            >
              Task
            </Link>
            <Link
              to="/orders"
              className="btn border  rounded-full w-24 lg:w-28 m-1 px-4 py-2 bg-gray-300 text-sm  text-gray-800"
            >
              Order
            </Link>
            <Link
              to="/submit"
              className="btn border  rounded-full w-24 lg:w-28  m-1 px-4 py-2 bg-gray-300 text-sm  text-gray-800"
            >
              Submit
            </Link>
            <Link
              to="/payment"
              className="btn border  rounded-full w-24 lg:w-28 m-1 px-4 py-2 bg-gray-300 text-sm  text-gray-800"
            >
              Payment
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
