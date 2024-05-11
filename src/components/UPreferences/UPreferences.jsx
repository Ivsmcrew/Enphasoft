import React, { useEffect, useState } from 'react'
import styles from './UPreferences.module.css'
import { Link } from 'react-router-dom'
import CmButton from '../../UI/buttons/CmButton/CmButton'
import { useDispatch, useSelector } from 'react-redux'
import * as helper from "../../helpers/sortHelper"

function UPreferences({ 
  selectedSort,
  setSelectedSort,
  filter,
  setFilter
}) 
{
  function handleSelect(event) {
    setSelectedSort(event.target.value)
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
        <option value="id" disabled>Sort by id...</option>
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