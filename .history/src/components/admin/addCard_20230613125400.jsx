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
