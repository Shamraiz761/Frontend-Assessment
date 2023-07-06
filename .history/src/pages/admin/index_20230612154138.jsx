import { AiTwotoneSetting } from "react-icons/ai";

import React from "react";

import Profile from "../../assets/images/Ellipse 1631.png";
function Admin() {
  return (
    <div className="m-5 ">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        <div className="bg-white shadow p-3 rounded-md">
          <div className="flex flex-row justify-between">
            <div>
              <img src={Profile} className="w-20 h-20" />
              <h1 className="font-semibold text-sm mb-1">Name</h1>
              <p>Full Control</p>
              <p>absd@gmail.com</p>
            </div>
            <AiTwotoneSetting className="text-gray-500 text-lg" />
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
