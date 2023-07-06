import React from "react";

import profile from "../../assets/images/Ellipse 1631.png";

function Submission() {
  return (
    <div className="m-5 bg-white shadow ">
      <div className="grid grid-cols-1 md:grid-cols-3 flex-wrap p-3">
        <div className="flex flex-row ">
          <img src={profile} className="w-10 h-10" />
          <div className="ml-2">
            <h1 className=" text-xs font-medium text-gray-900  ">
              Muhammad Shamraiz
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Submission;
