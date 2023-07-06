import React from "react";

import Profile from "../../assets/images/Ellipse 1631.png";

function card() {
  return (
    <div>
      {" "}
      <div className="bg-white shadow p-3 rounded-md">
        <div className="flex flex-row justify-between">
          <div>
            <img src={Profile} className="w-20 h-20" />
            <h1 className=" my-2  font-medium text-xl">M.Shamraiz</h1>
            <p className="text-sm font-thin mb-2 text-blue-500">Full Control</p>
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
              <ul className="bg-white absolute  mt-2 py-2 w-36 shadow rounded ">
                <li className="text-gray-600 text-xs font-thin px-3 py-1 cursor-pointer hover:bg-gray-100 focus:bg-blue-500 ">
                  <div className="flex flex-row">
                    <input type="checkbox" className="mr-2 small-checkbox" />
                    Full Control
                  </div>
                </li>
                <li className="text-gray-600 text-xs font-thin px-3 py-1 cursor-pointer hover:bg-gray-100">
                  <div className="flex flex-row">
                    <input type="checkbox" className="mr-2 small-checkbox" />
                    Task
                  </div>
                </li>
                <li className="text-gray-600 text-xs font-thin px-3 py-1 cursor-pointer hover:bg-gray-100">
                  <div className="flex flex-row">
                    <input type="checkbox" className="mr-2 small-checkbox" />
                    Order
                  </div>
                </li>
                <li className="text-gray-600 text-xs font-thin px-3 py-1 cursor-pointer hover:bg-gray-100">
                  <div className="flex flex-row">
                    <input type="checkbox" className="mr-2 small-checkbox" />
                    Submissions
                  </div>
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
  );
}

export default card;
