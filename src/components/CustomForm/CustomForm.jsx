import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react'
import * as helper from './helper'
import styles from './CustomForm.module.css'

function CustomForm({submitFunction}) {
  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      onSubmit={ 
        (values) => {
          submitFunction({username: values.username, password: values.password})
        } 
      }
    >
      {() => (  //errors, touched and other usefull methods of useFormik
        <Form className={styles.form}>
          <div className={styles.input}>
            <label for="username" htmlFor="username" className={styles.label}>Username</label>
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
            <label for="password" htmlFor="password" className={styles.label}>Password</label>
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

          <button 
            type="submit" 
            className={styles.button}
          >
            Log in
          </button>
        </Form>
      )}
    </Formik>
  )
}

export default CustomForm