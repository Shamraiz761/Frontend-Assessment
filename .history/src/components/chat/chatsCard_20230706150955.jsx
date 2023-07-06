import React from "react";

function ChatsCard() {
  return (
    <div className="flex flex-row items-center justify-center px-3 py-1.5  border-y border-gray-50 rounded-sm hover:bg-gray-900 cursor-pointer">
      <img
        src={"https://i.pravatar.cc/300"}
        className="h-10 w-10 rounded-full"
      />

      <div className={`ml-5 flex-row justify-between w-full flex`}>
        <div>
          {" "}
          <h1 className="text-gray-100">Shamraiz</h1>{" "}
          <p className="text-xs font-thin text-gray-400">Hello there......</p>
        </div>
        <p className="text-xs font-thin text-gray-400">10:40 am</p>
      </div>
    </div>
  );
}

export default ChatsCard;
