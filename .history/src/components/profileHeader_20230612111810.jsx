import { Link } from "react-router-dom";
import profile from "../assets/images/Ellipse 1631.png";

import React from "react";

function ProfileHeader() {
  return (
    <div className="m-5  w-[11/12] md:h-72 h-[360px]  bg-white">
      <div className="dashboard-cover-iamge h-[150px]  w-[100%]"></div>
      <div className="grid lg:grid-cols-2 grid-cols-1 md:grid-cols-2 flex-row justify-between flex-wrap">
        <div className="ml-12">
          <img src={profile} className="h-32 w-32 mt-[-65px]  " />
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
            className="btn border rounded-full w-24 lg:w-28 m-1 py-2 bg-gray-300 focus:bg-blue-600 focus:text-white text-gray-800 text-sm text-center "
          >
            Task
          </Link>
          <Link
            to="/orders"
            className="btn border  rounded-full w-24 lg:w-28 m-1 py-2 bg-gray-300 text-sm text-center text-gray-800"
          >
            Order
          </Link>
          <button className="btn border  rounded-full w-24 lg:w-28  m-1 py-2 bg-gray-300 text-sm text-center text-gray-800">
            Submit
          </button>
          <button className="btn border  rounded-full w-24 lg:w-28 m-1 py-2 bg-gray-300 text-sm text-center text-gray-800">
            Payment
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader;
