import { RxDotFilled } from "react-icons/rx";
import { AiOutlineClockCircle } from "react-icons/ai";
import { TiArrowSync } from "react-icons/ti";
import { MdDone } from "react-icons/md";

import React from "react";

import smallCard from "../../assets/images/smallcard.jpeg";
import largeCard from "../../assets/images/largeCard.jpeg";

function View() {
  return (
    <div className="m-5 grid grid-cols-1 lg:grid-cols-5   gap-6">
      <div className="p-3 col-span-1 lg:col-span-3 bg-white rounded-md">
        <img src={largeCard} className="w-full h-72 rounded-md" />
        <div className="my-2 mb-3 grid grid-cols-2 lg:grid-cols-5 gap-4">
          <img src={smallCard} className="w-40 h-28 rounded-md" />
          <img src={smallCard} className="w-40 h-28 rounded-md" />
          <img src={smallCard} className="w-40 h-28 rounded-md" />
          <img src={smallCard} className="w-40 h-28 rounded-md" />
          <img src={smallCard} className="w-40 h-28 rounded-md" />
        </div>
        <div className="mb-6 mt-5">
          <h1 className="text-sm font-medium">About This Service</h1>
          <span className="text-xs font-light text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            ea praesentium veritatis sequi quaerat illum numquam possimus magni
            similique vel, quam, dolore nemo nulla sapiente. Asperiores veniam
            in at quasi. Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Nam excepturi eos, tempore sed nisi omnis consectetur sint,
            fugit magnam quod rerum pariatur sit impedit at ex laborum, fuga
            alias ipsam.
          </span>
        </div>
        <div className="mb-4 ">
          <h1 className="text-sm font-medium">The Services Include</h1>
          <div className="">
            <span className="text-xs font-light text-gray-500 mt-2 font col-span-1 flex items-center flex-row">
              <RxDotFilled className="mr-1" /> Experienced SEO with a track
              record of success
            </span>
            <span className="text-xs font-light text-gray-500 mt-2 col-span-1 flex items-center flex-row">
              <RxDotFilled className="mr-1" /> Experienced SEO with a track
              record of success
            </span>
            <span className="text-xs font-light text-gray-500 mt-2 col-span-1 flex items-center flex-row">
              <RxDotFilled className="mr-1" /> Customized strategies tailored to
              your unique business goals.
            </span>
            <span className="text-xs font-light text-gray-500 mt-2 col-span-1 flex items-center flex-row">
              <RxDotFilled className="mr-1" /> Up-to-date with the latest SEO
              trends and algorithm changes.
            </span>
          </div>
        </div>
      </div>
      <div className="  col-span-1 lg:col-span-2 mr-5">
        <div className=" grid grid-rows-2 gap-6 ">
          <div className="p-3 bg-white rounded-md">
            <h1 className="text-lg font-medium mb-5">
              SEO Services : Elivate Your Online Visibility
            </h1>
            <div className="mb-3">
              <div className="flex flex-row items-center mb-3">
                <span className="flex flex-row text-gray-500 text-sm  mr-8 font-medium items-center">
                  <AiOutlineClockCircle className="text-blue-500 font-bold mr-1" />
                  7 Days Delivery
                </span>
                <span className="flex flex-row font-medium text-gray-500 text-sm  items-center">
                  <TiArrowSync className="text-blue-500 font-bold mr-1" />1
                  Revision
                </span>
              </div>
              <div className="mb-3">
                <span className="flex flex-row text-gray-500   m-1 items-center text-xs font-light">
                  <MdDone className="text-blue-500 text-lg font-bold mr-2" />
                  High Rankings
                </span>

                <span className="flex flex-row text-gray-500 text-xs m-1 font-light   items-center">
                  <MdDone className="text-blue-500 font-bold text-lg mr-2" />
                  More{" "}
                </span>
                <span className="flex flex-row text-gray-500 text-xs font-light m-1  items-center">
                  <MdDone className="text-blue-500 font-bold mr-2 text-lg" />
                  Enhanced Brand{" "}
                </span>
                <span className="flex flex-row text-gray-500 text-xs font-light  m-1 items-center">
                  <MdDone className="text-blue-500 font-bold mr-2 text-lg" />
                  Targeted{" "}
                </span>
                <span className="flex flex-row text-gray-500 text-xs font-light m-1 items-center">
                  <MdDone className="text-blue-500 font-bold mr-2 text-lg" />
                  Imporved User{" "}
                </span>
              </div>
              <p className="mb-3 mr-20 text-xs text-gray-500 font-light">
                {" "}
                search engines, improve website performance, and drive targeted
                traffic to your
              </p>
            </div>
          </div>
          <div className="p-3 bg-white"></div>
        </div>
      </div>
    </div>
  );
}

export default View;
