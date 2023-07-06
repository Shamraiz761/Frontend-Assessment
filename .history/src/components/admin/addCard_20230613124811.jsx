import React, { useState } from "react";

import AddCircle from "../../assets/images/Add Circle.png";

function AddCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div>
      <div className="bg-white shadow  rounded-md">
        <div
          className="flex flex-row justify-center items-center h-[255px] rounded-md border focus:border-blue-500"
          tabIndex={0}
          style={{ fontSize: "150px", fontWeight: "lighter" }}
        >
          <button
            onClick={toggleModal}
            className="bg-white flex flex-row justify-center text-blue-500 rounded-lg border border-dashed border-blue-500 px-2 py-2 text-sm w-full"
            type="button"
          >
            <img src={AddCircle} className=" text-blue-500 w-36 h-36" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddCard;
