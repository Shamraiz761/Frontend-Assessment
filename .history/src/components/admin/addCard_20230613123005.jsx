import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";

function AddCard() {
  return (
    <div>
      <div className="bg-white shadow p-3 rounded-md">
        <div className="flex flex-row justify-center items-center h-56">
          <AiOutlinePlusCircle className="text-3xl text-blue-500" />
        </div>
      </div>
    </div>
  );
}

export default AddCard;
