import { VscCircleSlash } from "react-icons/vsc";
import { BsStar } from "react-icons/bs";
import { FiUpload } from "react-icons/fi";
import { BiRightArrow } from "react-icons/bi";

import React from "react";

import Profile from "../../assets/images/profilePic.jpg";

function UserChat() {
  return (
    <div className="col-span-1 md:col-span-3 p-3  overflow-y shadow-lg rounded-lg">
      {" "}
      <div className="flex flex-row  px-3 py-1.5 bg-black rounded-lg  shadow border-gray-100  ">
        <img src={Profile} className="h-10 w-10 rounded-full" />
        <div className="ml-5 flex flex-row justify-between w-full ">
          <div>
            {" "}
            <h1>Shamraiz</h1>{" "}
            <p className="text-xs font-thin text-gray-400">
              Online 30 mins ago
            </p>
          </div>
          <div className="flex flex-row items-center">
            <BsStar className="text-blue-500 mr-8" />
            <VscCircleSlash className="text-blue-500 mr-3" />
          </div>
        </div>
      </div>
      <div className="chats mt-3  ">
        <p className="text-sm bg-gray-200  rounded-md my-1 p-2 text-gray-900  flex flex-col  justify-end w-1/2">
          Hey I am there
        </p>

        <p className="text-sm bg-[#33de33]  rounded-md p-2  flex flex-col float-right justify-end w-1/2">
          Hey I am there
        </p>

        <p className="text-sm bg-gray-200  rounded-md my-1 p-2 text-gray-900  flex flex-col  justify-end w-1/2">
          Hey I am there
        </p>

        <p className="text-sm bg-[#33de33]  rounded-md p-2  flex flex-col float-right justify-end w-1/2">
          Hey I am there
        </p>
        <p className="text-sm bg-gray-200  rounded-md my-1 p-2 text-gray-900  flex flex-col  justify-end w-1/2">
          Hey I am there
        </p>

        <p className="text-sm bg-[#33de33]  rounded-md p-2  flex flex-col float-right justify-end w-1/2">
          Hey I am there
        </p>
      </div>
      <div
        className="flex flex-col w-full  justify-end "
        style={{ height: "80vh" }}
      >
        <form className=" ">
          <div className="flex">
            <button
              id="dropdown-button"
              data-dropdown-toggle="dropdown"
              className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 dark:border-gray-700 dark:text-white rounded-l-lg hover:bg-gray-200  focus:outline-none "
              type="button"
            >
              <FiUpload />
            </button>
            <div
              id="dropdown"
              className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdown-button"
              >
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Photo
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Vedio
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Document
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Finance
                  </a>
                </li>
              </ul>
            </div>
            <div className="relative w-full">
              <input
                type="search"
                id="search-dropdown"
                className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-100 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                placeholder="Message"
              />
              <button
                type="submit"
                className="absolute top-0 right-0 z-10 py-3 px-4 text-sm font-medium text-gray-900 bg-gray-100 rounded-r-lg border "
              >
                <BiRightArrow />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserChat;
