import { Link, Outlet } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { BsFillChatSquareTextFill } from "react-icons/bs";
import { MdOutlineDashboard, MdOutlineCastForEducation } from "react-icons/md";
import "./index.css";

import React from "react";
import Header from "../components/header/index";

export default function Layout() {
  return (
    <div>
      <Header />

      <div className="relative">
        <div
          className={`h-screen bg-black p-3 w-44 top-0 absolute sidebar z-50`}
        >
          <div className="flex flex-row justify-center">
            <img
              className="h-20 w-20 rounded-full"
              src="data:image/jpeg;base64,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"
            />
          </div>
          <div className="mt-4 flex flex-row justify-center">
            <a
              href="#"
              class="text-gray-100 bg-[#33de33] rounded-md px-6 w-full text-center py-2.5 text-sm font-semibold hover:text-purple-600 mr-4"
            >
              Edit Profile
            </a>
          </div>

          {/* Search */}
          <h1 className="rounded-md text-gray-100  text-xs gap-x-4 text-center py-2 p-2">
            About App
          </h1>

          <ul className="pt-2">
            <Link
              to="/"
              className="rounded-md text-gray-100  text-xs flex items-center gap-x-4 cursor-pointer hover:bg-gray-50 hover:text-blue-500 py-4 p-2"
            >
              <span className="text-xl block">
                <CgProfile />
              </span>
              <span className={` text-xs font-md flex-1 hidden-link `}>
                Profile
              </span>
            </Link>
            {/* Dashboard */}
            <Link
              to="/marketplace"
              className="rounded-md text-gray-100  text-xs flex items-center gap-x-4 cursor-pointer hover:bg-gray-50 hover:text-blue-500 py-4 p-2"
            >
              <span className="text-xl block">
                <MdOutlineDashboard />
              </span>
              <span className={` text-sm font-md hidden-link`}>
                Marketplace
              </span>
            </Link>

            {/* Lens */}
            <Link
              to="/chat"
              className="rounded-md text-gray-100  text-xs flex items-center gap-x-4 cursor-pointer hover:bg-gray-50 hover:text-blue-500 py-4 p-2"
            >
              <span className="text-lg block">
                <BsFillChatSquareTextFill />
              </span>
              <span className={` text-xs font-md flex-1  hidden-link`}>
                Chat
              </span>
            </Link>

            {/* Orders */}
            <Link
              to="/education"
              className="rounded-md text-gray-100  text-xs flex items-center gap-x-4 cursor-pointer hover:bg-gray-50 hover:text-blue-500 py-4 p-2"
            >
              <span className="text-xl block">
                <MdOutlineCastForEducation />
              </span>
              <span className={` text-xs font-md flex-1  hidden-link `}>
                Education
              </span>
            </Link>
          </ul>
        </div>
      </div>

      <div className="ml-44">
        <Outlet />
      </div>
    </div>
  );
}
