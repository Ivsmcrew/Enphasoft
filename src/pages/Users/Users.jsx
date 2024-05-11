import React, { useEffect, useState } from 'react'
import styles from './Users.module.css'
import EmphasoftAPI from '../../API/emphasoft'
import { Route, Routes } from 'react-router-dom'
import CreateModal from '../CreateModal/CreateModal'
import { useDispatch, useSelector } from 'react-redux'
import { setFilteredAndSortedUsers, setUsers } from '../../features/users/usersSlice'
import UPreferences from '../../components/UPreferences/UPreferences'
import UserCard from '../../components/UserCard/UserCard'
import ViewField from '../../components/ViewField/ViewField'

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
    if (token && token.length) {
      getUsers()
    }
  }, [])
  useEffect(() => {
    dispatch( setFilteredAndSortedUsers([...users]) )
  }, [users])

  return (
    <main className={styles.main}>
      <section className={styles.users}>
        <div className={styles.users__usersList}>
          <UPreferences />
          <div className={styles.usersList__list}>
            {filteredAndSortedUsers && filteredAndSortedUsers.map(user => 
              <UserCard key={user.id} user={user} />
            )}
          </div>
        </div>
        
        <ViewField />
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