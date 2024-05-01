import React, { useEffect, useState } from 'react'
import styles from './Users.module.css'
import EmphasoftAPI from '../../API/emphasoft'
import { Route, Routes } from 'react-router-dom'
import CreateModal from '../CreateModal/CreateModal'
import { useDispatch, useSelector } from 'react-redux'
import { setFilteredAndSortedUsers, setUsers } from '../../features/users/usersSlice'
import UPreferences from '../../components/UPreferences/UPreferences'

function Users() {
  const dispatch = useDispatch();
  const authState = useSelector(state => state.auth)
  let {isAuth, token} = authState
  const usersState = useSelector(state => state.users)
  let { users, filteredAndSortedUsers } = usersState

  useEffect(() => {
    async function getUsers() {
      let usersData = await EmphasoftAPI.getUsers(token)
      if (usersData) {
        dispatch( setUsers(usersData) )
      }
    }
    if (token.length) {
      getUsers()
      dispatch( setFilteredAndSortedUsers([...users]) )
    }
  }, [])

  return (
    <main className={styles.main}>
      <section className={styles.users}>
        <div className={styles.users__usersList}>
          <UPreferences />
          <div className={styles.usersList__list}>
            {filteredAndSortedUsers && filteredAndSortedUsers.map(user => {
              return (
                <div className={styles.user} key={user.id}>
                  <p className={styles.p}>{"First name: " + (user.first_name || "no first name")}</p>
                  <p className={styles.p}>{"Last name: " + (user.last_name || "no last name")}</p>
                  <p className={styles.p}>{"Username: " + user.username}</p>
                  <p className={styles.p}>{"ID: " + user.id}</p>
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