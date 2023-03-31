import React from 'react'
import styles from '../styles/LoginAndSignUp.module.css'
import { Button2 } from './Button'

const Login = () => {
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
              <h1>Login</h1>
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
                      name="psw"
                    />
                  </div>
                  <div className={styles.psw}>
                    <span>
                      <a href="#">Forgot password?</a>
                    </span>
                  </div>
                  <div className={styles.btnContainer}>
                    <Button2
                      type={'submit'}
                      options={'Login'}
                      fn={''}
                    ></Button2>
                  </div>
                </div>
              </form>
              <hr />
              <span className={styles.register}>
                Don't have account? <a href="/SignUp">&nbsp;register here</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
