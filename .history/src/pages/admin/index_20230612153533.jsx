import { IoSettingsSharp } from "react-icons/io";

import React from "react";

import Profile from "../../assets/images/Ellipse 1631.png";
function Admin() {
  return (
    <div className="m-5 ">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        <div className="bg-white shadow p-3">
          <div className="flex flex-row justify-between">
            <div>
              <img src={Profile} className="w-16 h-16" />
            </div>
            <IoSettingsSharp />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
