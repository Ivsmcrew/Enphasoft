import React, { useEffect, useState } from "react";
import { UserAuthContext } from "../../context/context";

const AuthProvider = function({children}) {
  const [token, setToken] = useState(false);
  useEffect(() => {
    if (localStorage.getItem('token')) {
      console.log(localStorage.getItem('token'))
    }
  }, [])

  return (
    <UserAuthContext.Provider value={{
      token,
      setToken
    }}>
      {children}
    </UserAuthContext.Provider>
  )
}

export default AuthProvider