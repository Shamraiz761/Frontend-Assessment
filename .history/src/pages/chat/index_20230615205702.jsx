import React from "react";
import UserChat from "../../components/chat/userChat";
import { VscThreeBars } from "react-icons/vsc";

function Chat() {
  return (
    <div className="m-5 grid grid-cols-2 lg:grid-cols-5  gap-8 flex-wrap">
      <div className="col-span-2 p-3 bg-white rounded-lg shadow-lg min-h-screen">
        <div>
          <form className="m-2">
            <div className="flex items-center">
              <VscThreeBars className="mt-2 mr-4   rounded-lg text-gray-500 cursor-pointer text-2xl" />
              <div className="relative w-full  ">
                <input
                  type="search"
                  id='location-search"'
                  className=" p-1.5 w-full  z-20 text-sm text-gray-200 bg-gray-50 shadow rounded-lg"
                  placeholder="Search"
                  required
                  style={{ border: "none", outline: "none" }}
                />

                <button
                  type="submit"
                  className="absolute top-0 right-0 p-1.5 text-sm font-medium text-gray-400  rounded-r-lg   "
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
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
          </form>
        </div>
      </div>
      <div className="col-span-2 p-3 md:col-span-3 bg-white rounded-lg shadow-lg min-h-screen">
        <UserChat />
      </div>
    </div>
  );
}

export default Chat;
