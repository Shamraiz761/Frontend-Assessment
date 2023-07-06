import React from "react";

function UserChat() {
  return (
    <div className="flex flex-row px-3 py-1.5  border-y border-gray-100 rounded-sm ">
      <img src={Profile} className="h-10 w-10 rounded-full" />
      <div className="ml-5  ">
        <div className="flex flex-row justify-between items-center">
          <h1>Shamraiz</h1>{" "}
          <p className="text-xs font-thin text-gray-400 ml-60">8:10 am</p>
        </div>
        <p className="text-xs font-thin text-gray-400">OK, See You later</p>
      </div>
    </div>
  );
}

export default UserChat;