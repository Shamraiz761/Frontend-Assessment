import { AiOutlinePlusCircle } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BiUserPlus } from "react-icons/bi";

import React from "react";

import "./index.css";
import Profile from "../../components/dashboard/profile";

function Home() {
  return (
    <div>
      <Profile />
      <div className="m-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 ">
        <div className="bg-white p-5 rounded-md">
          <div className="flex flex-row justify-between py-3 border-b">
            <div className="text-sm font-medium">Task Name</div>
            <div className="flex flex-row text-gray-500">
              <AiOutlinePlusCircle className="mr-2" />
              <BsThreeDotsVertical />
            </div>
          </div>
          <div>
            <div className="flex flex-row justify-between mt-3">
              <span className="bg-green-200 px-2 py-1 rounded-lg text-xs font-thin">
                Done
              </span>
              <div className="flex flex-row text-gray-500 mt-1">
                <BiUserPlus className="mr-2 " />
                <BsThreeDotsVertical />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
