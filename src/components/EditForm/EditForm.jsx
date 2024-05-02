import { ErrorMessage, Field, Form, Formik, withFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import * as helper from './helper'
import styles from "./EditForm.module.css"
import CmButton from '../../UI/buttons/CmButton/CmButton';
import { useDispatch, useSelector } from 'react-redux';

function EditForm({submitFunction}) {
  const dispatch = useDispatch();
  const viewedUser = useSelector(state => state.users.viewedUser);

  return (
    viewedUser.id &&
    <Formik
      initialValues={{
        "username": viewedUser.username,
        "first_name": viewedUser.first_name,
        "last_name": viewedUser.last_name,
        "password": viewedUser.password,
      }}
      onSubmit={ 
        (values) => {
          submitFunction({
            "id": viewedUser.id,
            "username": values.username,
            "first_name": values.first_name,
            "last_name": values.last_name,
            "password": values.password,
          })
        } 
      }
      enableReinitialize
    >
      {() => (  //errors, touched and other usefull methods of useFormik
        <Form className={styles.form}>
          <div className={styles.input}>
            <label htmlFor="username" className={styles.label}>Username</label>
            <Field 
              id="username"
              name="username" 
              placeholder="your username" 
              validate={ helper.validateUsername } 
              className={styles.field}
            />
            <ErrorMessage name="username" render={msg => <div className={styles.error}>{msg}</div>} />
          </div>

          <div className={styles.input}>
            <label htmlFor="first_name" className={styles.label}>First name</label>
            <Field 
              id="first_name"
              name="first_name" 
              placeholder="your first name" 
              validate={ helper.validateName } 
              className={styles.field}
            />
            <ErrorMessage name="first_name" render={msg => <div className={styles.error}>{msg}</div>} />
          </div>
         
          <div className={styles.input}>
            <label htmlFor="last_name" className={styles.label}>Last name</label>
            <Field 
              id="last_name"
              name="last_name" 
              placeholder="your last name" 
              validate={ helper.validateName } 
              className={styles.field}
            />
            <ErrorMessage name="last_name" render={msg => <div className={styles.error}>{msg}</div>} />
          </div>
         
          <div className={styles.input}>
            <label htmlFor="password" className={styles.label}>Password</label>
            <Field 
              id="password"
              type="password"
              name="password" 
              placeholder="your password" 
              validate={ helper.validatePassword } 
              className={styles.field}
            />
            <ErrorMessage name="password" render={msg => <div className={styles.error}>{msg}</div>} />
          </div>

          <CmButton type="submit">
            Save changes
          </CmButton>
        </Form>
      )}
    </Formik>
  )
}

export default EditForm