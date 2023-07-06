import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import * as React from "react";

import Layout from "./layout";

import Chat from "../pages/chat";

export default function AppRoutes() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<Layout />}>
          <Route path="/" element={<Chat />} />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}
