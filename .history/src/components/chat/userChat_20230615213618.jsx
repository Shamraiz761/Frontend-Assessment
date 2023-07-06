import React from "react";

import Profile from "../../assets/images/profilePic.jpg";

function UserChat() {
  return (
    <div className="flex flex-row px-3 py-1.5  border-b border-gray-100 rounded-sm ">
      <img src={Profile} className="h-10 w-10 rounded-full" />
      <div className="ml-5  ">
        <div className="flex flex-row justify-between items-center">
          <h1>Shamraiz</h1>{" "}
          <p className="text-xs font-thin text-gray-400 ">8:10 am</p>
        </div>
        <p className="text-xs font-thin text-gray-400">Online 30 mins ago</p>
      </div>
    </div>
  );
}

export default UserChat;
