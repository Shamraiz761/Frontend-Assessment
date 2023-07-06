import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import * as React from "react";

import Layout from "./layout";
import Root from "./root";

import Login from "../pages/auth/login";
import Chat from "../pages/chat";
import UserChat from "../components/chat/userChat";
import ProfileLayout from "./profileLayout";
import Tasks from "../pages/tasks";
import Orders from "../pages/orders";
import Submission from "../pages/submission";
import Admin from "../pages/admin";
import MarketPlace from "../pages/marketplace";

export default function AppRoutes() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/login" element={<Login />} />

        <Route element={<Layout />}>
          <Route path="/chat" element={<Chat />}>
            <Route path="/chat/user" element={<UserChat />} />
          </Route>
          <Route path="/marketplace" element={<MarketPlace />} >
            <Route path="/view"
          </Route>
          <Route path={"/"} element={<ProfileLayout />}>
            {/* Add Task order payment submit route here */}
            <Route path="/admin" element={<Admin />} />
            <Route path="/" element={<Tasks />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/submission" element={<Submission />} />
          </Route>
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}
