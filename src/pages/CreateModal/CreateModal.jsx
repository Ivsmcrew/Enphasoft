import React from 'react'
import styles from './CreateModal.module.css'
import { useNavigate } from 'react-router-dom';

function CreateModal() {
  const navigate = useNavigate();

  return (
    <section className={styles.createModal}>
      <button onClick={() => navigate(-1)}>X</button>
      create modal
    </section>
  )
}

export default CreateModal