import React, { useEffect, useState } from 'react'
import styles from './UPreferences.module.css'
import { Link } from 'react-router-dom'
import CmButton from '../../UI/buttons/CmButton/CmButton'
import { useDispatch, useSelector } from 'react-redux'
import { setUsers } from '../../features/users/usersSlice'

function UPreferences() {
  const [selectedSort, setSelectedSort] = useState("price")
  const dispatch = useDispatch();
  const usersState = useSelector(state => state.users)
  let { users } = usersState;

  useEffect(() => {
    sortUsers(selectedSort)
  }, [selectedSort])

  function sortUsers(selectedSort) {
      dispatch( setUsers([...users].sort((a, b) => {
        if (selectedSort === 'ascend') {
          return a.id - b.id
        } else if (selectedSort === 'descend') {
          return b.id - a.id
        }
      })))
  }

  function handleSelect(event) {
    setSelectedSort(event.target.value)
  }

  return (
    <div className={styles.usersList__preferences}>
      <select
        className={styles.select}
        value={selectedSort}
        onChange={handleSelect}
      >
        <option value="price" disabled>Sort by price...</option>
        <option value="ascend">Ascending</option>
        <option value="descend">Descending</option>
      </select>
      <input type="text" placeholder="Filter by username"/>
      <Link to="new-user">
        <CmButton>
          Create new user
        </CmButton>
      </Link>
    </div>
  )
}

export default UPreferences