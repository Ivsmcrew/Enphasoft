import React, { useContext } from 'react'
import styles from "./Login.module.css"
import { TokenContext, UserAuthContext } from "../../context/context"
import { useNavigate } from 'react-router-dom'

function Login() {
  const {isAuth, setIsAuth} = useContext(UserAuthContext)
  const {token, setToken} = useContext(TokenContext)
  const navigate = useNavigate();

  function exit() {
    setToken(null)
    setIsAuth(false);
    localStorage.removeItem('auth');
  }
  function enter() {
    //getMyToken()
    setIsAuth(true)
    localStorage.setItem('auth', 'true')
    navigate("/")
  }

  if (isAuth) {
    return (
      <main className={styles.main}>
        <p>You are already logged in</p>
        <button onClick={exit}>LOG OUT</button>
      </main>
    )
  } else {
    return (
      <main className={styles.main}>
        <button onClick={enter}>ENTER</button>
      </main>
    )
  }
}

export default Login