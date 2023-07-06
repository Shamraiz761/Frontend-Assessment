import React from "react";

import Profile from "../../assets/images/profilePic.jpg";
import { Link } from "react-router-dom";

function ChatsCard() {
  return (
    <Link to="/userchat">
      <div className="flex flex-row px-3 py-1.5  border-y border-gray-100 rounded-sm hover:bg-blue-200">
        <img src={Profile} className="h-10 w-10 rounded-full" />
        <div className="ml-5 flex flex-row justify-between w-full ">
          <div>
            {" "}
            <h1>Shamraiz</h1>{" "}
            <p className="text-xs font-thin text-gray-400">OK, See you later</p>
          </div>
          <p className="text-xs font-thin text-gray-400">8:10 am</p>
        </div>
      </div>
    </Link>
  );
}

export default ChatsCard;
