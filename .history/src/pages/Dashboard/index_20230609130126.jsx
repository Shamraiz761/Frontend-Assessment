import { AiOutlinePlusCircle } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";

import React, { useState } from "react";

import "./index.css";
import Profile from "../../components/dashboard/profile";
import Card from "../../components/dashboard/card";

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="mr-3">
      <Profile />
      <div className="m-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
        <div className="bg-white p-5 rounded-md">
          <div className="flex flex-row justify-between py-3 border-b">
            <div className="text-sm font-medium">Task Name</div>
            <div className="flex flex-row text-gray-500">
              <AiOutlinePlusCircle className="mr-2" />
              <BsThreeDotsVertical />
            </div>
          </div>
          <Card />
          <Card />
        </div>
        <div className="bg-white p-5 rounded-md">
          <div className="flex flex-row justify-between py-3 border-b">
            <div className="text-sm font-medium">Task Name</div>
            <div className="flex flex-row text-gray-500">
              <AiOutlinePlusCircle className="mr-2" />
              <BsThreeDotsVertical />
            </div>
          </div>
          <Card />
          <Card />
        </div>
        <div className="bg-white p-5 rounded-md">
          <div className="flex flex-row justify-between py-3 border-b">
            <div className="text-sm font-medium">Task Name</div>
            <div className="flex flex-row text-gray-500">
              <AiOutlinePlusCircle className="mr-2" />
              <BsThreeDotsVertical />
            </div>
          </div>
          <Card />
        </div>

        <div>
          <button
            onClick={toggleModal}
            className="bg-white flex flex-row justify-center text-blue-500 rounded-lg border border-dashed border-blue-500 px-2 py-2 text-sm w-full"
            type="button"
          >
            <AiOutlinePlusCircle className="mr-2 mt-1" />
            <h1>Add List</h1>
          </button>
          {isModalOpen && (
            <div className="fixed  top-0 left-0 right-0 bottom-0 z-50   bg-opacity-50 bg-black">
              <div className="  min-h-screen flex items-center justify-center bg-slate-100"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default Home;
