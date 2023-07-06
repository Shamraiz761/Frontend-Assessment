import { AiTwotoneSetting } from "react-icons/ai";

import React, { useState } from "react";

import Profile from "../../assets/images/Ellipse 1631.png";
import "./index.css";
import Card from "../../components/admin/card";

function Admin() {
  const [isOpen, setisOpen] = useState(false);
  const toggle = () => {
    setisOpen(!isOpen);
  };

  return (
    <div className="m-5 ">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        <Card />
      </div>
    </div>
  );
}

export default Admin;
