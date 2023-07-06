import React, { useState } from "react";

import "./index.css";
import Profile from "../../components/dashboard/profile";

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="mr-3">
      <Profile />
    </div>
  );
}
export default Home;
