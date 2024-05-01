import React, { useEffect, useState } from 'react'
import styles from './Users.module.css'
import EmphasoftAPI from '../../API/emphasoft'
import { Route, Routes } from 'react-router-dom'
import CreateModal from '../CreateModal/CreateModal'
import { useDispatch, useSelector } from 'react-redux'
import { setUsers } from '../../features/users/usersSlice'
import UPreferences from '../../components/UPreferences/UPreferences'

function Users() {
  const dispatch = useDispatch();
  const authState = useSelector(state => state.auth)
  let {isAuth, token} = authState
  const usersState = useSelector(state => state.users)
  let { users } = usersState

  useEffect(() => {
    async function getUsers() {
      let usersData = await EmphasoftAPI.getUsers(token)
      if (usersData) {
        dispatch( setUsers(usersData) )
      }
    }
    if (token.length) {
      getUsers()
    }
  }, [])

  return (
    <main className={styles.main}>
      <section className={styles.users}>
        <div className={styles.users__usersList}>
          <UPreferences />
          <div className={styles.usersList__list}>
            {users && users.map(user => {
              return (
                <div className={styles.user} key={user.id}>
                  <p>{"First name: " + (user.first_name || "no first name")}</p>
                  <p>{"Last name: " + (user.last_name || "no last name")}</p>
                  <p>{"Username: " + user.username}</p>
                  <p>{"ID: " + user.id}</p>
                </div>
              )
            })}
          </div>
        </div>
        <div className={styles.users__viewField}>

        </div>
      </section>
      <Routes>
        <Route 
          path="new-user"
          element={<CreateModal />}
        />
      </Routes>
    </main>
  )
}

export default Users