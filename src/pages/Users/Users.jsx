import React, { useEffect, useState } from 'react'
import styles from './Users.module.css'
import EmphasoftAPI from '../../API/emphasoft'
import { Route, Routes } from 'react-router-dom'
import CreateModal from '../CreateModal/CreateModal'
import { useDispatch, useSelector } from 'react-redux'
import { setUsers } from '../../features/users/usersSlice'
import UPreferences from '../../components/UPreferences/UPreferences'
import UserCard from '../../components/UserCard/UserCard'
import ViewField from '../../components/ViewField/ViewField'
import * as helper from "../../helpers/sortHelper"

function Users() {
  const dispatch = useDispatch();
  const authState = useSelector(state => state.auth)
  let {isAuth, token} = authState
  const usersState = useSelector(state => state.users)
  let { users } = usersState
  const [filteredAndSortedUsers, setFilteredAndSortedUsers] = useState([])
  const [selectedSort, setSelectedSort] = useState("id")
  const [filter, setFilter] = useState("")

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
    let filteredUsers = helper.filterUsers(filter, users)
    setFilteredAndSortedUsers( helper.sortUsers(selectedSort, filteredUsers) )
  }, [users, filter, selectedSort])

  return (
    <main className={styles.main}>
      <section className={styles.users}>
        <div className={styles.users__usersList}>
          <UPreferences 
            filteredAndSortedUsers={filteredAndSortedUsers} 
            setFilteredAndSortedUsers={setFilteredAndSortedUsers}  
            selectedSort={selectedSort}
            setSelectedSort={setSelectedSort}
            filter={filter}
            setFilter={setFilter}
          />
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