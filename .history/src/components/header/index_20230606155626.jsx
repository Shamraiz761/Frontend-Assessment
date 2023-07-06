import { IoIosNotifications } from "react-icons/io";

import React from "react";
import { CgProfile } from "react-icons/cg";

function Header() {
  return (
    <div>
      {/* component */}
      <nav className=" bg-white w-full flex relative justify-between items-center mx-auto px-8 py-4 h-16">
        {/* search bar */}
        <div className="hidden sm:block flex-shrink flex-grow-0 justify-start px-2">
          <div className="inline-block">
            <div className="inline-flex items-center max-w-full">
              <input
                className="flex items-center text-gray-400 bg-slate-50 justify-between  flex-grow-0  relative w-72 border rounded-lg  py-1"
                type="search"
                placeholder="Search"
              />

              <div className="flex items-center justify-center relative  h-8 w-24 rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="flex-initial">
          <div className="flex justify-end items-center relative">
            <div className="block">
              <div className="inline relative sm:flex sm:flex-row sm:justify-center">
                <button
                  type="button"
                  className="inline-flex items-center relative px-2  rounded-full hover:shadow-lg"
                >
                  <IoIosNotifications className="text-gray-400 text-xl" />
                </button>
                <button
                  type="button"
                  className="inline-flex items-center relative px-2  rounded-full hover:shadow-lg"
                >
                  <CgProfile className="text-gray-400 text-xl" />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* end login */}
      </nav>
    </div>
  );
}

export default Header;
