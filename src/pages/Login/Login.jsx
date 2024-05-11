import React, { useEffect } from 'react'
import styles from "./Login.module.css"
import { useNavigate } from 'react-router-dom'
import EmphasoftAPI from '../../API/emphasoft'
import LoginForm from '../../components/LoginForm/LoginForm'
import CmButton from '../../UI/buttons/CmButton/CmButton'
import { useDispatch, useSelector } from 'react-redux'
import { setToken, setIsAuth } from '../../features/auth/authSlice'

function Login() {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);
  const { isAuth, token} = authState;
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      dispatch( setIsAuth(true) )
    }
    if (localStorage.getItem('token')) {
      dispatch( setToken(localStorage.getItem('token')) )
    }
  }, [])

  function exit() {
    dispatch( setToken(null) )
    dispatch( setIsAuth(false) )
    localStorage.removeItem('auth');
    localStorage.removeItem('token');
  }

  //скорее всего эту функцию нельзя было оставлять здесь и пробрасывать в форму, а то криво как будто выходит. 
  async function enter(user) {
    let loginData = await EmphasoftAPI.login(user) 

    if (typeof loginData == "object" && loginData.status) {
      alert("Неверные логин или пароль. Статус ошибки: " + loginData.status)
    } else if (typeof loginData == "string" && loginData.length) {
      dispatch( setToken(loginData) )
      dispatch( setIsAuth(true) )
      localStorage.setItem('auth', 'true')
      localStorage.setItem('token', loginData)
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
        <LoginForm submitFunction={enter} />
      </main>
  )
}

export default Login