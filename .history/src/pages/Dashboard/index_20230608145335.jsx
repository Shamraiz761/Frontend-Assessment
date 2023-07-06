import React from "react";
import profile from "../../assets/images/Ellipse 1631.png";
import "./index.css";

function Home() {
  return (
    <div className="m-5  w-[11/12] h-72 bg-white">
      <div className="dashboard-cover-iamge h-[150px] w-[100%]"></div>
      <div className="grid grid-cols-2 flex-row justify-between">
        <div className="ml-12">
          <img src={profile} className="h-32 w-32 mt-[-65px]  " />
          <h1 className="text-blue-600 font-semibold text-sm ml-[-15px] mt-2">
            Muhammad Shamraiz
          </h1>
          <p className="text-gray-400 text-xs font-thin ml-[-15px]">
            shamirajpoot@gmail.com
          </p>
        </div>
        <div className="flex justify-end mx-4 items-center">
          <button className="btn border  rounded-full w-28  px-4 py-2 bg-blue-600 text-sm  text-white">
            Task
          </button>
          <button className="btn border  rounded-full w-28  px-4 py-2 bg-blue-600 text-sm  text-white">
            Task
          </button>
          <button className="btn border  rounded-full w-28  px-4 py-2 bg-blue-600 text-sm  text-white">
            Task
          </button>
          <button className="btn border  rounded-full w-28  px-4 py-2 bg-blue-600 text-sm  text-white">
            Task
          </button>
        </div>
      </div>
    </div>
  );
}
export default Home;
