import React from "react";
import dashboard from "../../assets/images/Rectangle 29852.png";
import profile from "../../assets/images/Ellipse 1631.png";

function Home() {
  return (
    <div className="m-5  w-[11/12] h-72 bg-white">
      <div
        className="dashboard-cover-iamge h-[50px] w-[100%]"
        style={{
          backgroundImage: `url(${dashboard})`,
        }}
      ></div>
    </div>
  );
}
export default Home;
