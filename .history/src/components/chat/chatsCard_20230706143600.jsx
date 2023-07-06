import React from "react";
import { useNavigate } from "react-router-dom";

function ChatsCard({ chat, open }) {
  return (
    <div className="flex flex-row items-center justify-center px-3 py-1.5  border-y border-gray-100 rounded-sm hover:bg-blue-200 cursor-pointer">
      <img
        src={"https://i.pravatar.cc/300"}
        className="h-10 w-10 rounded-full"
      />

      <div
        className={`ml-5 flex-row justify-between w-full ${
          open ? "flex" : "hidden"
        } `}
      >
        <div>
          {" "}
          <h1>{chat?.name}</h1>{" "}
          <p className="text-xs font-thin text-gray-400">{chat?.lastMessage}</p>
        </div>
        <p className="text-xs font-thin text-gray-400">{chat?.time}</p>
      </div>
    </div>
  );
}

export default ChatsCard;
