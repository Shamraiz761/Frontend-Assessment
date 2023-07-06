import React from "react";
import "./index.css";
import Profile from "../../components/dashboard/profile";

function Home() {
  return (
    <div>
      <Profile />
      <div className="my-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg-grid-cols-4 gap-6">
        <div className="bg-white">djsdhds</div>
        <div className="bg-white">djsdhds</div>
        <div className="bg-white">djsdhds</div>
        <div className="bg-white">djsdhds</div>
      </div>
    </div>
  );
}
export default Home;
