import React from 'react'
import styles from './CreateModal.module.css'
import { useNavigate } from 'react-router-dom';
import { FaRegWindowClose } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import EmphasoftAPI from '../../API/emphasoft';
import AddForm from "../../components/AddForm/AddForm";
import { addUser } from '../../features/users/usersSlice';

function CreateModal() {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);
  let { isAuth, token } = authState;
  const usersState = useSelector((state) => state.users);
  let { users } = usersState;

  const navigate = useNavigate();

  async function createUser(user) {
    let newUser = await EmphasoftAPI.addUser(user, token)
    if (newUser) {
      dispatch( addUser(newUser) )
    }
    navigate(-1)
  }

  return (
    <section className={styles.createModal}>
      <button onClick={() => navigate(-1)}>
        <FaRegWindowClose color='black' size="1.8rem" />
      </button>
      <AddForm submitFunction={createUser} />
    </section>
  )
}

export default CreateModal