import React from 'react'
import styles from './CmButton.module.css'

function CmButton({children, className, ...props}) {
  return (
    <button className={styles.button + ` ${className}`} {...props}>
      {children}
    </button>
  )
}

export default CmButton