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
        <div className="">
          <button className="btn border  rounded-full px-2 py-1 bg-blue-500 text-white">
            Task
          </button>
        </div>
      </div>
    </div>
  );
}
export default Home;
