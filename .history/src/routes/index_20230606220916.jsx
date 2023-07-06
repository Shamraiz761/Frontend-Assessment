import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import * as React from "react";

import Layout from "./layout";
import Root from "./root";

import Home from "../pages/dashboard";
import Login from "../pages/auth/login";
import Header from "../components/header/index";

export default function AppRoutes() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route path="/login" element={<Login />} />

        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}
