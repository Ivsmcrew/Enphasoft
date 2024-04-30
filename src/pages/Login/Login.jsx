import React, { useContext, useEffect } from 'react'
import styles from "./Login.module.css"
import { TokenContext, UserAuthContext } from "../../context/context"
import { useNavigate } from 'react-router-dom'
import EmphasoftAPI from '../../API/emphasoft'
import CustomForm from '../../components/CustomForm/CustomForm'

function Login() {
  const {isAuth, setIsAuth} = useContext(UserAuthContext)
  const {token, setToken} = useContext(TokenContext)
  const navigate = useNavigate();

  function exit() {
    setToken(null)
    setIsAuth(false);
    localStorage.removeItem('auth');
  }

  async function enter(user) {
    let token = await EmphasoftAPI.login(user)
    setToken( token )
    
    if (typeof token == "string" && token.length) {
      setIsAuth(true)
      localStorage.setItem('auth', 'true')
      navigate("/")
    }
  }

  return (
    isAuth 
      ?
      <main className={styles.main}>
        <p>You are already logged in</p>
        <button onClick={exit}>LOG OUT</button>
      </main> 
      :
      <main className={styles.main}>
        <CustomForm submitFunction={enter} />
      </main>
  )
}

export default Login