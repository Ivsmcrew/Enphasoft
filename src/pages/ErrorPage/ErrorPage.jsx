import React from 'react'
import styles from './ErrorPage.module.css'

function ErrorPage() {
  return (
    <main className={styles.main}>
      <section className={styles.error}>
        <p>Ooops! Something went wrong...</p>
        <p>Such a page does not exist!</p>
      </section>
    </main>
  )
}

export default ErrorPage