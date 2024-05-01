import React, { useEffect, useState } from 'react'
import styles from './Users.module.css'
import EmphasoftAPI from '../../API/emphasoft'
import { Link, Route, Routes } from 'react-router-dom'
import CmButton from '../../UI/buttons/CmButton/CmButton'
import CreateModal from '../CreateModal/CreateModal'
import { useDispatch, useSelector } from 'react-redux'

function Users() {
  const dispatch = useDispatch();
  const authState = useSelector(state => state.auth)
  let {isAuth, isTokenLoading, token, error} = authState
  const [users, setUsers] = useState([])

  useEffect(() => {
    async function getUsers() {
      let usersData = await EmphasoftAPI.getUsers(token)
      if (usersData) {
        setUsers(usersData)
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
          <div className={styles.usersList__preferences}>
            <select>
              <option value="price">Sort...</option>
              <option value="price">By price</option>
              <option value="year">By year</option>
            </select>
            <input type="text" placeholder="Filter by username"/>
            <Link to="new-user">
              <CmButton>
                Create new user
              </CmButton>
            </Link>
          </div>
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