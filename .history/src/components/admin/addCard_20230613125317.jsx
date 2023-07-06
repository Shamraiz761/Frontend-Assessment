import React, { useState } from "react";

import AddCircle from "../../assets/images/Add Circle.png";

function AddCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div>
      <div className="bg-white shadow  rounded-md">
        <div
          className="flex flex-row justify-center items-center h-[255px] rounded-md border focus:border-blue-500"
          tabIndex={0}
          style={{ fontSize: "150px", fontWeight: "lighter" }}
        >
          <button
            onClick={toggleModal}
            className="bg-white flex flex-row justify-center text-blue-500  px-2 py-2 text-sm w-full"
            type="button"
          >
            <img src={AddCircle} className=" text-blue-500 w-36 h-36" />
          </button>
          {isModalOpen && (
            <div className="fixed  top-0 left-0 right-0 bottom-0 z-50   bg-opacity-50 bg-black">
              <div className="  min-h-screen flex items-center justify-center ">
                <div className="absolute w-9/12 ml-40 bg-slate-50 rounded-lg shadow p-8">
                  <div className="grid grid-cols-4 gap-6">
                    <div className="col-span-3">
                      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 flex-wrap">
                        <div className="card bg-white rounded-lg shadow-lg">
                          <div className="flex flex-row justify-center items-center h-28 text-sm">
                            <div>
                              <p className="mb-1 text-center">6/7/23</p>
                              <p className="text-xs font-thin text-gray-400">
                                Created Date
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="card bg-white rounded-lg shadow-lg">
                          <div className="flex flex-row justify-center items-center h-28 text-sm">
                            <div>
                              <p className="mb-1 text-center">6/7/23</p>
                              <p className="text-xs font-thin text-gray-400">
                                Created Date
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="card bg-white rounded-lg shadow-lg">
                          <div className="flex flex-row justify-center items-center h-28 text-sm">
                            <div>
                              <p className="mb-1 text-center">-/-/-</p>
                              <p className="text-xs font-thin text-gray-400">
                                Due to
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white w-full p-8 mt-3 ">
                        <label
                          for="message"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Your message
                        </label>
                        <textarea
                          id="message"
                          rows="4"
                          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Write your thoughts here..."
                        ></textarea>
                        <div className="my-5">
                          <div className="my-2 flex flex-row">
                            <p className="mx-2  text-sm font-medium text-gray-900">
                              Checklist
                            </p>
                            <button> </button>
                          </div>
                          <div className="flex flex-row justify-between">
                            <div className="flex flex-row">
                              <input
                                type="checkbox"
                                className="mr-4 text-sm rounded-sm "
                              />
                              <label
                                for="message"
                                className="block mb-2 text-xs  text-gray-400 font-thin  "
                              >
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit.
                              </label>
                            </div>
                          </div>
                        </div>

                        <div className="my-3">
                          <div className="flex flex-row">
                            <h1 className=" text-sm font-medium text-gray-900">
                              Comments
                            </h1>
                          </div>
                          <input
                            className="w-full bg-gray-100 text-gray-400 p-2 mt-2 rounded-md text-sm font-light"
                            placeholder="Your comment here..."
                          />
                        </div>
                        <div>
                          <div className="mt-5 flex flex-row justify-between">
                            <div className="flex flex-row ">
                              <h1 className=" text-sm font-medium text-gray-900">
                                Activity
                              </h1>
                            </div>
                          </div>

                          <div className="mt-2 flex flex-row justify-between">
                            <div className="flex flex-row ">
                              <h1 className=" text-xs font-medium text-gray-900 ml-2 mt-2">
                                Muhammad Shamraiz
                              </h1>
                              <p className="text-xs text-gray-400 font-thin ml-1 mt-2">
                                Added cover for task 1
                              </p>
                            </div>
                            <p className="text-gray-400 text-xs font-thin">
                              23-April-2023
                            </p>
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
                      Submit
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

export default AddCard;
