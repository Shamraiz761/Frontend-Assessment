import React from "react";
import dashboard from "../../assets/images/Rectangle 29852.png";
import profile from "../../assets/images/Ellipse 1631.png";

function Home() {
  return (
    <div className="m-5 h-72 bg-white">
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
        <>
          <img src={profile} />
        </>
      </div>
    </div>
  );
}

export default Home;
