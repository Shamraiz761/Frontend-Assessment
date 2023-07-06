import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { Gi3DGlasses } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { BsArrowLeft, BsFillChatSquareTextFill } from "react-icons/bs";
import { MdOutlineDashboard, MdOutlineCastForEducation } from "react-icons/md";
import "./index.css";

import React, { useState } from "react";
import Header from "../components/header/index";

export default function Layout() {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState(false);
  const navigate = useNavigate();

  const { pathname } = useLocation();

  const sc =
    "rounded-md text-xs flex items-center gap-x-4 cursor-pointer bg-gray-50 text-blue-500 py-4 p-2";
  const uc =
    "rounded-md text-gray-500  text-xs flex items-center gap-x-4 cursor-pointer hover:bg-gray-50 hover:text-blue-500 py-4 p-2";

  return (
    <div>
      <Header />

      <div className={`${open ? "ml-56" : "ml-[60px]"}`}>
        <Outlet />
      </div>
    </div>
  );
}
