import { VscThreeBars } from "react-icons/vsc";

import React from "react";

import UserChat from "../../components/chat/userChat";
import ChatsCard from "../../components/chat/chatsCard";

function Chat() {
  const [search, setSearch] = useState("");

  return (
    <div className="m-5 grid grid-cols-1 md:grid-cols-5  gap-2 flex-wrap-reverse bg-[#252626] rounded-md shadow-lg min-h-screen">
      <div className="col-span-1 md:col-span-2 p-3    ">
        <form className="m-4">
          <div className="flex items-center">
            <VscThreeBars className=" mr-4   rounded-lg text-gray-100 cursor-pointer text-2xl" />
            <div className="relative w-full  ">
              <input
                type="search"
                id='location-search"'
                className=" p-1.5 w-full focus:ring-gray-300  z-20 text-sm text-gray-100 bg-black py-2 shadow rounded-lg"
                placeholder="Search"
                required
                style={{ border: "none", outline: "none" }}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              <button
                type="submit"
                className="absolute top-0 right-0 p-1.5 text-sm font-medium text-gray-100  rounded-r-lg   "
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
        </form>
        <ChatsCard />
      </div>

      <UserChat />
    </div>
  );
}

export default Chat;
