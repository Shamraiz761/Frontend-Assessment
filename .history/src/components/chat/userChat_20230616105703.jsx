import { VscCircleSlash } from "react-icons/vsc";
import { BsStar } from "react-icons/bs";
import React from "react";

import Profile from "../../assets/images/profilePic.jpg";

function UserChat() {
  return (
    <div className="flex flex-row  px-3 py-1.5  border-b border-gray-100 rounded-sm ">
      <img src={Profile} className="h-10 w-10 rounded-full" />
      <div className="ml-5 flex flex-row justify-between w-full ">
        <div>
          {" "}
          <h1>Shamraiz</h1>{" "}
          <p className="text-xs font-thin text-gray-400">Online 30 mins ago</p>
        </div>
        <div className="flex flex-row items-center">
          <BsStar className="text-blue-500 mr-8" />
          <VscCircleSlash className="text-blue-500 mr-3" />
        </div>
      </div>
      <div>
        <div className="relative w-full">
          <div className="absolute left-0 top-0 flex items-center h-full pl-3">
            <svg
              aria-hidden="true"
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <input
            type="search"
            id="location-search"
            className="p-1.5 pl-9 pr-10 w-full focus:ring-gray-300 z-20 text-sm text-gray-200 bg-gray-50 shadow rounded-lg"
            placeholder="Search"
            required
            style={{ border: "none", outline: "none" }}
          />

          <button
            type="submit"
            className="absolute top-0 right-0 p-1.5 text-sm font-medium text-gray-400 rounded-r-lg"
          >
            <svg
              aria-hidden="true"
              className="w-4 h-4 mr-3 mt-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserChat;
