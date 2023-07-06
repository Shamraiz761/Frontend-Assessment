import { AiTwotoneSetting } from "react-icons/ai";

import React, { useState } from "react";

import Profile from "../../assets/images/Ellipse 1631.png";
function Admin() {
  const [isOpen, setisOpen] = useState(false);
  const toggle = () => {
    setisOpen(!isOpen);
  };

  return (
    <div className="m-5 ">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        <div className="bg-white shadow p-3 rounded-md">
          <div className="flex flex-row justify-between">
            <div>
              <img src={Profile} className="w-20 h-20" />
              <h1 className=" my-2  font-medium text-xl">M.Shamraiz</h1>
              <p className="text-sm font-thin mb-2 text-blue-500">
                Full Control
              </p>
              <p className="text-xs font-thin mb-2 text-gray-500">
                absd@gmail.com
              </p>
            </div>
            <div>
              <AiTwotoneSetting
                className="text-gray-500 text-lg"
                onClick={toggle}
              />
              {isOpen && (
                <ul className="bg-white absolute right-0 mt-2 py-2 w-36 shadow rounded ">
                  <li className="text-gray-600 text-xs font-thin px-3 py-1 cursor-pointer hover:bg-gray-100 focus:bg-blue-500 ">
                    <div className="flex flex-row">Done</div>
                  </li>
                  <li className="text-gray-600 text-xs font-thin px-3 py-1 cursor-pointer hover:bg-gray-100">
                    <div className="flex flex-row">Pending</div>
                  </li>
                  <li className="text-gray-600 text-xs font-thin px-3 py-1 cursor-pointer hover:bg-gray-100">
                    <div className="flex flex-row">Decline</div>
                  </li>
                </ul>
              )}
            </div>
          </div>
          <button className="bg-blue-500 text-white w-full py-2 rounded-md my-2">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default Admin;
