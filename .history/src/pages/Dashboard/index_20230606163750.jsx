import React from "react";
import dashboard from "../../assets/images/Rectangle 29852.png";
import profile from "../../assets/images/Ellipse 1631.png";

function Home() {
  return (
    <div className="my-3 px-5 h-72 bg-white">
      {/* component */}
      <div>
        <img src={dashboard} className="w-full h-54" />
      </div>
      <div>
        <img src={profile} className="rounded-full w-24 h-24" />
      </div>
    </div>
  );
}

export default Home;
