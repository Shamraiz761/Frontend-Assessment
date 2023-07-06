import React, { useState } from "react";

import "./index.css";
import Card from "../../components/admin/card";

function Admin() {
  return (
    <div className="m-5 mr-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Admin;
