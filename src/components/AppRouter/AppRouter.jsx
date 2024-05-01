import React from "react";
import { Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../../router/router";
import Layout from "../Layout/Layout";
import { useSelector } from "react-redux";

const AppRouter = function() {
  const state = useSelector((state) => state.auth);
  let {isAuth, token} = state;

  let routes = isAuth ? privateRoutes : publicRoutes;

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {routes.map((route) => 
          <Route 
            index={route.index}
            path={route.path}
            element={<route.element />}
            key={route.path}
          />
        )} 
      </Route>
    </Routes>
  )
}

export default AppRouter