import { AiOutlinePlusCircle } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CiCalendarDate } from "react-icons/ci";

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
              <div className="  min-h-screen flex items-center justify-center ">
                <div className="absolute w-9/12 ml-40 bg-slate-50 rounded-lg shadow p-4">
                  <div className="grid grid-cols-4 gap-6">
                    <div className="col-span-3">
                      <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4 flex-wrap">
                        <div className="card bg-white rounded-lg shadow-lg">
                          <div className="flex flex-row justify-center items-center h-28 text-sm">
                            <CiCalendarDate className="mr-4 text-3xl text-blue-600 p-1 bg-blue-100" />
                            <div>
                              <p className="mb-1 text-center">6/7/23</p>
                              <p className="text-xs font-thin text-gray-400">
                                Created Date
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 flex-wrap">
                        <div className="card bg-white rounded-lg shadow-lg">
                          <div className="flex flex-row justify-center items-center h-28 text-sm">
                            <CiCalendarDate className="mr-4 text-3xl text-blue-600 p-1 bg-blue-100" />
                            <div>
                              <p className="mb-1 text-center">6/7/23</p>
                              <p className="text-xs font-thin text-gray-400">
                                Created Date
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 flex-wrap">
                        <div className="card bg-white rounded-lg shadow-lg">
                          <div className="flex flex-row justify-center items-center h-28 text-sm">
                            <CiCalendarDate className="mr-4 text-3xl text-blue-600 p-1 bg-blue-100" />
                            <div>
                              <p className="mb-1 text-center">6/7/23</p>
                              <p className="text-xs font-thin text-gray-400">
                                Created Date
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-end  pt-2">
                    <button
                      onClick={toggleModal}
                      type="button"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
                    >
                      I accept
                    </button>
                    <button
                      onClick={toggleModal}
                      type="button"
                      className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900"
                    >
                      Decline
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default Home;
