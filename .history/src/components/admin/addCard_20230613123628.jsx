import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";

function AddCard() {
  return (
    <div>
      <div className="bg-white shadow  rounded-md">
        <div
          className="flex flex-row justify-center items-center h-[250px] rounded-md border focus:border-blue-500"
          tabIndex={0}
          style={{ fontSize: "150px", fontWeight: "lighter" }}
        >
          <AiOutlinePlusCircle className=" text-blue-500 focus:border-blue-500" />
        </div>
      </div>
    </div>
  );
}

export default AddCard;
