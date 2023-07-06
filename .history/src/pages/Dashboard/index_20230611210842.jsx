import React, { useState } from "react";

import "./index.css";
import Profile from "../../components/dashboard/profile";
import Card from "../../components/dashboard/card";
import Modal from "../../components/dashboard/modal";

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
