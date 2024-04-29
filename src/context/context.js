import React from "react";

export const UserAuthContext = React.createContext({
  isAuth: null,
  setIsAuth: null
});

export const TokenContext = React.createContext({
  token: null,
  setToken: null
})