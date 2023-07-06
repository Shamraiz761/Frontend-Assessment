import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";

function AddCard() {
  return (
    <div>
      <div className="bg-white shadow p-3 rounded-md">
        <div className="flex flex-row justify-center items-center h-[230px]">
          <AiOutlinePlusCircle
            className=" text-blue-500 font-thin"
            style={{ fontSize: "150px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default AddCard;
