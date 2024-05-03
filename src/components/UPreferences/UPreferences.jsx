import React, { useEffect, useState } from 'react'
import styles from './UPreferences.module.css'
import { Link } from 'react-router-dom'
import CmButton from '../../UI/buttons/CmButton/CmButton'
import { useDispatch, useSelector } from 'react-redux'
import { setFilteredAndSortedUsers } from '../../features/users/usersSlice'

function UPreferences() {
  const [selectedSort, setSelectedSort] = useState("price")
  const [filter, setFilter] = useState("")
  const dispatch = useDispatch();
  const usersState = useSelector(state => state.users)
  let { users, filteredAndSortedUsers  } = usersState;

  useEffect(() => {
    if (selectedSort !== "price") {
      sortUsers(selectedSort)
    }
  }, [selectedSort])
  useEffect(() => {
    filterUsers(filter)
  }, [filter])

  function sortUsers(selectedSort) {
      dispatch( setFilteredAndSortedUsers([...users].sort((a, b) => {
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

  function filterUsers(filter) {
    dispatch( setFilteredAndSortedUsers([...users].filter((user) => {
      return ( user.username.toLowerCase().includes(filter.toLowerCase()) )
    })) )
  }
  function handleFilter(event) {
    setFilter(event.target.value)
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

      <input 
        className={styles.input}
        value={filter} 
        onChange={handleFilter} 
        type="text" 
        placeholder="Filter by username"
      />

      <Link to="new-user" className={styles.createUserLink}>
        <CmButton className={styles.createBtn}>
          Create user
        </CmButton>
      </Link>
    </div>
  )
}

export default UPreferences