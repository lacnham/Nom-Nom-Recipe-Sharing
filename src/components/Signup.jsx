import React from 'react'
import styles from '../styles/LoginAndSignUp.module.css'
import { Button1 } from './Button'
import { useEffect, useState } from 'react'
import { check } from 'prettier'

const Signup = () => {
  const [enteredData, setEnteredData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  })

  const changeHandler = event => {
    setEnteredData({
      ...enteredData,
      [event.target.name]: event.target.value
    })
  }

  function validateInput(email, password, confirmPassword) {
    const errors = {};
  
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      errors.email = 'Invalid email address';
    }
  
    if (password === '') {
      errors.password = 'Password is required';
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(password)) {
      errors.password = 'Password must be at least 8 characters and contain a lowercase letter, an uppercase letter, and a number';
    }
  
    if (confirmPassword === '') {
      errors.confirmPassword = 'Please confirm your password';
    } else if (confirmPassword !== password) {
      errors.confirmPassword = 'Passwords do not match';
    }
  
    return errors;
  }

  useEffect(() => {
    console.clear()
    console.log(
      'email: ' +
        enteredData.email +
        '\npassword: ' +
        enteredData.password +
        '\nconfirmPassword: ' +
        enteredData.confirmPassword
    )

    console.log(validateInput(enteredData.email,enteredData.password,enteredData.confirmPassword))
  })


  return (
    <div className={styles.page}>
      <div>Nav Bar goes here</div>
      <div className={styles.card}>
        <div className={styles.photoContainer}>
          <div className={styles.photo}></div>
        </div>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.text}>
              <h1>Register</h1>
              <form>
                <div>
                  <div className={styles.inputContainer}>
                    <i className={styles.icon}>
                      <svg
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                        <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                      </svg>
                    </i>
                    <input
                      className={styles.inputField}
                      type="text"
                      placeholder="Email"
                      name="email"
                      onChange={changeHandler}
                      value={enteredData.email}
                    />
                  </div>

                  <div className={styles.inputContainer}>
                    <i className={styles.icon}>
                      <svg
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          clipRule="evenodd"
                          fillRule="evenodd"
                          d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z"
                        />
                      </svg>
                    </i>
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
                  <div className={styles.inputContainer}>
                    <i className={styles.icon}>
                      <svg
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          clipRule="evenodd"
                          fillRule="evenodd"
                          d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z"
                        />
                      </svg>
                    </i>
                    <input
                      className={styles.inputField}
                      type="Password"
                      placeholder="Retype Password"
                      name="confirmPassword"
                      onChange={changeHandler}
                      value={enteredData.confirmPassword}
                    />
                  </div>
                  <div className={styles.btnContainer}>
                    <Button1
                      type={'submit'}
                      options={'Register'}
                      fn={''}
                    ></Button1>
                  </div>
                </div>
              </form>
              <hr />
              <span className={styles.register}>
                Already have account?<a href="/Login">&nbsp;Login here</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
