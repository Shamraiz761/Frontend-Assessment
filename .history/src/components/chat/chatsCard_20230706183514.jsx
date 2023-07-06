import React, { useState } from "react";
import chats from "../../data/chat";

function ChatsCard() {
  const chat = [
    {
      name: "Shamraiz",
      Message: "Hello There!",
      time: "10:30 AM",
    },
    {
      name: "Saud ",
      Message: "Hello G.....",
      time: "10:30 AM",
    },
    {
      name: "Abdul Basit",
      Message: "Hello! .....",
      time: "10:30 AM",
    },
    {
      name: "Shazil",
      Message: "Hello!",
      time: "10:30 AM",
    },
    {
      name: "Faizan",
      Message: "Hello!",
      time: "10:30 AM",
    },
    {
      name: "Saad",
      Message: "Hello!",
      time: "10:30 AM",
    },
    {
      name: "Zain",
      Message: "Hello!",
      time: "10:30 AM",
    },
  ];

  const [data, setData] = useState(chats);

  return (
    <div>
      {chat.map((user) => {
        return (
          <div className="flex flex-row items-center justify-center px-3 py-1.5  border-y border-gray-50 rounded-sm hover:bg-gray-900 cursor-pointer">
            <img
              src={"https://i.pravatar.cc/300"}
              className="h-10 w-10 rounded-full"
            />

            <div className={`ml-5 flex-row justify-between w-full flex`}>
              <div>
                {" "}
                <h1 className="text-gray-100">{user.name}</h1>{" "}
                <p className="text-xs font-thin text-gray-400">
                  {user.Message}
                </p>
              </div>
              <p className="text-xs font-thin text-gray-400">{user.time}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ChatsCard;
