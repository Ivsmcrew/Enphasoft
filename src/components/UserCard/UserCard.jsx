import React from 'react'
import styles from './UserCard.module.css'
import { useDispatch } from 'react-redux'
import { setViewedUser } from '../../features/users/usersSlice';

function UserCard({user}) {
  const dispatch = useDispatch();

  function userCardHandler() {
    dispatch( setViewedUser(user) )
  }

  return (
    <div 
      onClick={ userCardHandler } 
      className={styles.user} 
    >
      <div className={styles.p}>
        <h3 className={styles.title}>ID</h3>
        <span className={styles.value}>{user.id}</span>
      </div>
      <div className={styles.p}>
        <h3 className={styles.title}>Username</h3>
        <span className={styles.value}>{user.username}</span>
      </div>
      <div className={styles.p}>
        <h3 className={styles.title}>First name</h3>
        <span className={styles.value}>{(user.first_name || "no first name")}</span>
      </div>
      <div className={styles.p}>
        <h3 className={styles.title}>Last name</h3>
        <span className={styles.value}>{(user.last_name || "no last name")}</span>
      </div>
    </div>
  )
}

export default UserCard