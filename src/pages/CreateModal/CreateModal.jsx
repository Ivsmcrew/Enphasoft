import React from 'react'
import styles from './CreateModal.module.css'
import { useNavigate } from 'react-router-dom';
import { FaRegWindowClose } from "react-icons/fa";
import { useSelector } from 'react-redux';
import EmphasoftAPI from '../../API/emphasoft';

function CreateModal() {
  const authState = useSelector((state) => state.auth);
  let { isAuth, token } = authState;
  const usersState = useSelector((state) => state.users);
  let { users } = usersState;

  const navigate = useNavigate();

  async function createUser() {
    let newUser = await EmphasoftAPI.addUser({
      "username": "President228",
      "first_name": "Vladimir",
      "last_name": "Putin",
      "password": "Q):PG2K~]-<&$YLi7s4,TRZUJ**17?>]!{p.wnWtP(uMzN[)C![gD0:{4q.#QiLUr!hq",
      "is_active": true
    }, token)
    console.log(newUser)
  }

  return (
    <section className={styles.createModal}>
      <button onClick={createUser}>
        CREATE USER
      </button>
      <button onClick={() => navigate(-1)}>
        <FaRegWindowClose color='black' size="1.8rem" />
      </button>
    </section>
  )
}

export default CreateModal