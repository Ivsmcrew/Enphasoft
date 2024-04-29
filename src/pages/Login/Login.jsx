import React, { useContext } from 'react'
import styles from "./Login.module.css"
import { UserAuthContext } from "../../context/context"

function Login() {
  const {isAuth, setIsAuth} = useContext(UserAuthContext)

  function exit() {
    setIsAuth(false);
    localStorage.removeItem('auth');
  }

  return (
    <main className={styles.main}>
      Login
      <button onClick={exit}>EXIT</button>
    </main>
  )
}

export default Login