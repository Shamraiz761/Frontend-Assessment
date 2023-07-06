import React from "react";

import "./index.css";
import Profile from "../../components/dashboard/profile";
import Card from "../../components/dashboard/card";

function Home() {
  return (
    <div>
      <Profile />
      <div className="m-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 ">
        <Card />
      </div>
    </div>
  );
}
export default Home;
