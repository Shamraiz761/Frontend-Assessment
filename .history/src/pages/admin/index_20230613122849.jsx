import React, { useState } from "react";

import "./index.css";
import Card from "../../components/admin/card";
import AddCard from "../../components/admin/addCard";

function Admin() {
  return (
    <div className="m-5 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <Card />
        <Card />
        <Card />
        <Card />

        <AddCard />
      </div>
    </div>
  );
}

export default Admin;
