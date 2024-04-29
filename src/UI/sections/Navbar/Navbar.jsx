import React from 'react'
import styles from './Navbar.module.css'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <header className={styles.header}>
      <Link
        to="/"
        className={styles.logo}
      >
        <h1>EMPHASOFT</h1>
      </Link>

      <div className={styles.links}>
        <NavLink 
          to="users"
          className={({isActive}) => isActive ? `${styles.link} ${styles.active}` : styles.link}  
        >
          Users
        </NavLink>
        <NavLink 
          to="login"
          className={({isActive}) => isActive ? `${styles.link} ${styles.active}` : styles.link}  
        >
          Login
        </NavLink>
      </div>
    </header>
  )
}

export default Navbar