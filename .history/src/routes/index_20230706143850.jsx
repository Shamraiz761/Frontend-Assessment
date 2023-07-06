import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import * as React from "react";

import Layout from "./layout";
import Root from "./root";

import Chat from "../pages/chat";
import UserChat from "../components/chat/userChat";

import ChatLayout from "./chatLayout";

export default function AppRoutes() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<Layout />}>
          <Route path="/chat" element={<Chat />} />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}
