import React from 'react'
import styles from './Homepage.module.css'

function Homepage() {
  return (
    <main className={styles.main}>
      <section className={styles.content}> 
        <p className={styles.first}>EMPHA</p>
        <p className={styles.second}>SOFT</p>
      </section>
    </main>
  )
}

export default Homepage