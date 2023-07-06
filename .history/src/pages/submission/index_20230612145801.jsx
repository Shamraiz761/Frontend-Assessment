import React from "react";

import { TbFileUpload } from "react-icons/tb";

function Submission() {
  return (
    <div className="m-5 bg-white shadow  p-2">
      <div className="grid grid-cols-1 md:grid-cols-3 flex-wrap p-3 border-b bg-gray-50">
        <div className="flex flex-row ">
          <img
            src="https://www.shutterstock.com/image-vector/play-video-vector-icon-260nw-525553219.jpg"
            className="w-10 h-10 rounded-md"
          />
          <div className="ml-2">
            <h1 className=" text-xs font-medium text-gray-700 ml-2 mt-3 ">
              video.mp4
            </h1>
          </div>
        </div>
        <div className="text-sm font-thin text-gray-500 mt-3 text-center">
          2.34 mb
        </div>
        <TbFileUpload />
      </div>
    </div>
  );
}

export default Submission;
