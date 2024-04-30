import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../../router/router";
import { UserAuthContext } from "../../context/context";
import Layout from "../Layout/Layout";

const AppRouter = function() {
  const {isAuth, setIsAuth} = useContext(UserAuthContext);

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