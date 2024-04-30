import React, { useContext } from 'react'
import styles from './Users.module.css'
import { TokenContext } from '../../context/context'

function Users() {
  const {token, setToken} = useContext(TokenContext)

  console.log(token)

  return (
    <main className={styles.main}>Users</main>
  )
}

export default Users