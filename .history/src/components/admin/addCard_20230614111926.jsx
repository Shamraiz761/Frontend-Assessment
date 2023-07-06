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
            <div className="fixed  top-0 left-0 right-0 bottom-0 z-50 flex items-center min-h-screen justify-center  bg-opacity-50 bg-black">
              <div className="   flex items-center justify-center ">
                <div
                  className="  ml-40 bg-slate-50 rounded-lg shadow p-8 "
                  style={{ width: "500px" }}
                >
                  <div className="">
                    <h1 className="text-sm mb-2">
                      Invite Admins with their email
                    </h1>
                    <div className="flex flex-row justify-between">
                      <input
                        type="text"
                        className="bg-gray-300 text-gray-600 shadow rounded-md mr-3 w-72"
                      />
                      <button
                        onClick={toggleModal}
                        type="button"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
                      >
                        Invite
                      </button>
                    </div>
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
