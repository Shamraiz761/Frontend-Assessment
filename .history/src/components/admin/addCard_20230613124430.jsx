import React from "react";
import AddCircle from "../../assets/images/Add Circle.png";

function AddCard() {
  return (
    <div>
      <div className="bg-white shadow  rounded-md">
        <div
          className="flex flex-row justify-center items-center h-[255px] rounded-md border focus:border-blue-500"
          tabIndex={0}
          style={{ fontSize: "150px", fontWeight: "lighter" }}
        >
          <img src={AddCircle} className=" text-blue-500 w-36 h-36" />
        </div>
      </div>
    </div>
  );
}

export default AddCard;
