import React, { useState } from "react";
import { TokenContext } from "../../context/context";

const TokenProvider = function({children}) {
  const [token, setToken] = useState('');

  return (
    <TokenContext.Provider value={{
      token,
      setToken
    }}>
      {children}
    </TokenContext.Provider>
  )
}

export default TokenProvider