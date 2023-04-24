import React from 'react'
import styles from '../../styles/LoginAndSignUp/LoginAndSignUp.module.css'
import { Button1 } from '../Button'
import { useEffect, useState } from 'react'

export default function SignUpForm() {
  const [enteredData, setEnteredData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    Errors: []
  })

  const changeHandler = event => {
    setEnteredData({
      ...enteredData,
      [event.target.name]: event.target.value
    })
  }

  function validateInput(email, password, confirmPassword) {
    const errors = {}

    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      errors.email = 'Invalid email address'
    }

    if (password === '') {
      errors.password = 'Password is required'
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(password)
    ) {
      errors.password =
        'Password must be at least 8 characters and contain a lowercase letter, an uppercase letter, and a number'
    }

    if (confirmPassword === '') {
      errors.confirmPassword = 'Please confirm your password'
    } else if (confirmPassword !== password) {
      errors.confirmPassword = 'Passwords do not match'
    }
    return errors
  }

  useEffect(() => {
    enteredData.Errors = validateInput(
      enteredData.email,
      enteredData.password,
      enteredData.confirmPassword
    )
    console.log(enteredData.email.length)
  })

  return (
    <form>
      <div>
        <div className={styles.inputContainer}>
        <i className={`${styles.icon} ${'fa-solid fa-envelope'}`}></i>

          <input
            className={styles.inputField}
            type="text"
            placeholder="Email"
            name="email"
            onChange={changeHandler}
            value={enteredData.email}
            autoComplete="off"
          />
        </div>
        {enteredData.email.length != 0 && (
          <div className={styles.warning}>{enteredData.Errors.email}</div>
        )}

        <div className={styles.inputContainer}>
        <i className={`${styles.icon} ${'fa-solid fa-lock'}`}></i>

          <input
            className={styles.inputField}
            type="password"
            placeholder="Password"
            name="password"
            // onChange={e => setPassword(e.target.value)}
            onChange={changeHandler}
            value={enteredData.password}
          />
        </div>
        {enteredData.password.length != 0 && (
          <div className={styles.warning}>{enteredData.Errors.password}</div>
        )}

        <div className={styles.inputContainer}>
        <i className={`${styles.icon} ${'fa-solid fa-lock'}`}></i>

          <input
            className={styles.inputField}
            type="Password"
            placeholder="Retype Password"
            name="confirmPassword"
            onChange={changeHandler}
            value={enteredData.confirmPassword}
          />
        </div>
        {enteredData.confirmPassword.length != 0 && (
          <div className={styles.warning}>
            {enteredData.Errors.confirmPassword}
          </div>
        )}
        <div className={styles.btnContainer}>
          <Button1 type={'submit'} options={'Register'} fn={''}></Button1>
        </div>
      </div>
    </form>
  )
}
