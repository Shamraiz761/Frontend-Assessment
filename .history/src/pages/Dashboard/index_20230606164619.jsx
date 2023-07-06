import React from "react";
import dashboard from "../../assets/images/Rectangle 29852.png";
import profile from "../../assets/images/Ellipse 1631.png";

function Home() {
  return (
    <div className="m-5  h-72 bg-white">
      {/* component */}
      {/* <div>
        <img src={dashboard} className="w-full h-40" />
        <img src={profile} className="rounded-full w-24 h-24 mb-[100px]" />
      </div>
      <div></div> */}
      <div
        style={{
          backgroundImage: `url(${dashboard})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "500px",
          height: "300px",
        }}
      >
        {/* Content */}
      </div>
    </div>
  );
}

export default Home;
