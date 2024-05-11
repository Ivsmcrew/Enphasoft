import React, { useState } from 'react'
import styles from './ViewField.module.css'
import CmButton from "../../UI/buttons/CmButton/CmButton"
import { useDispatch, useSelector } from 'react-redux'
import EmphasoftAPI from '../../API/emphasoft';
import { deleteUserByID, setViewedUser, updateUserAction } from "../../features/users/usersSlice"
import EditForm from '../EditForm/EditForm';

function ViewField() {
  const dispatch = useDispatch();
  const viewedUser = useSelector(state => state.users.viewedUser);
  const token = useSelector(state => state.auth.token);
  const [isActive, setIsActive] = useState(false);

  async function deleteHandler() {
    if (!viewedUser) return
    await EmphasoftAPI.deleteUser(viewedUser.id, token)
    dispatch( deleteUserByID(viewedUser.id) )
    dispatch( setViewedUser({
      "id": null,
      "username": "",
      "first_name": "",
      "last_name": "",
      "password": "",
      "is_active": null
    }) )
  }

  async function updateUser(userData) {
    let updatedUser = await EmphasoftAPI.updateUser(userData, token)
    dispatch( updateUserAction(updatedUser) )
    dispatch( setViewedUser({
      "id": null,
      "username": "",
      "first_name": "",
      "last_name": "",
      "password": "",
      "is_active": null
    }) )
  }

  return (
    <div className={styles.users__viewField}>
      { viewedUser.id &&
        <>
          <div className={styles.buttons}>
            <CmButton className={styles.editBtn} onClick={() => setIsActive(!isActive)}>
              {isActive ? "Discard" : "Edit"}
            </CmButton>
            <CmButton className={styles.deleteBtn} onClick={deleteHandler}>Delete</CmButton>
          </div>

          <EditForm submitFunction={updateUser} isActive={isActive}/>     
        </>                                  
      }
      
    </div>
  )
}

export default ViewField