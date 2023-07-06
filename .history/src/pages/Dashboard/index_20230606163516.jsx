import React from "react";
import profile from "../../assets/images/Rectangle 29852.png";
function Home() {
  return (
    <div className="my-3 px-5">
      {/* component */}
      <div>
        <img src={profile} className="w-full h-54" />
      </div>
      <div>
        <img src={profile} className="rounded-full w-24 h-24" />
      </div>
    </div>
  );
}

export default Home;
