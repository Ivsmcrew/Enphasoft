import React, { useContext, useEffect } from 'react'
import styles from "./Login.module.css"
import { TokenContext, UserAuthContext } from "../../context/context"
import { useNavigate } from 'react-router-dom'
import EmphasoftAPI from '../../API/emphasoft'
import CustomForm from '../../components/CustomForm/CustomForm'
import CmButton from '../../UI/buttons/CmButton/CmButton'

function Login() {
  const {isAuth, setIsAuth} = useContext(UserAuthContext)
  const {token, setToken} = useContext(TokenContext)
  const navigate = useNavigate();

  function exit() {
    setToken(null)
    setIsAuth(false);
    localStorage.removeItem('auth');
  }

  //скорее всего эту функцию нельзя было оставлять здесь и пробрасывать в форму, а то криво как будто выходит. 
  async function enter(user) {
    let loginData = await EmphasoftAPI.login(user) //возвращает либо строку токена, либо объект ошибки

    if (typeof loginData == "object" && loginData.status) {
      alert("Неверные логин или пароль. Статус ошибки: " + loginData.status)
    } else if (typeof loginData == "string" && loginData.length) {
      setToken( loginData )
      setIsAuth(true)
      localStorage.setItem('auth', 'true')
      navigate("/")
    }
  }

  return (
    isAuth 
      ?
      <main className={styles.main}>
        <div className={styles.logoutBoard}>
          <p>You are already logged in...</p>
          <CmButton onClick={exit}>
            Log out
          </CmButton>
        </div>
      </main> 
      :
      <main className={styles.main}>
        <CustomForm submitFunction={enter} />
      </main>
  )
}

export default Login