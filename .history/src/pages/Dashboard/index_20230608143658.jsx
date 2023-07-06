import React from "react";
import profile from "../../assets/images/Ellipse 1631.png";
import "./index.css";

function Home() {
  return (
    <div className="m-5  w-[11/12] h-72 bg-white">
      <div className="dashboard-cover-iamge h-[150px] w-[100%]">
        <div>
          <img src={profile} className="h-32 w-32 mt-40" />
        </div>
      </div>
    </div>
  );
}
export default Home;
