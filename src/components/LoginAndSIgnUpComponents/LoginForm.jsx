import styles from '../../styles/LoginAndSignUp/LoginAndSignUp.module.css'
import { Button2 } from '../Button'
import React, { useState } from 'react'
import axios from 'axios'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:3000/auth/login', {
        email: email,
        password: password,
      })
      sessionStorage.setItem('accessToken', JSON.stringify(response.data.accesstoken).replace(/"/g, ''));
      localStorage.setItem('refreshtoken', JSON.stringify(response.data.refreshtoken).replace(/"/g, ''));
      console.log(localStorage);
      window.location.replace('/allrecipe')
    } catch (error) {
      console.error(error)
      // Handle errors here, such as displaying an error message to the user.
    }
  }

  return (
    <form onSubmit={handleSubmit} method='POST'>
      <div>
        <div className={styles.inputContainer}>
          <i className={`${styles.icon} ${'fa-solid fa-envelope'}`}></i>
          <input
            className={styles.inputField}
            type="text"
            placeholder="Email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className={styles.inputContainer}>
          <i className={`${styles.icon} ${'fa-solid fa-lock'}`}></i>

          <input
            className={styles.inputField}
            type="password"
            placeholder="Password"
            name="psw"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div className={styles.psw}>
          <span>
            <a href="#">Forgot password?</a>
          </span>
        </div>
        <div className={styles.btnContainer}>
          <Button2 type={'submit'} options={'Login'} fn={() => ''}></Button2>
        </div>
      </div>
    </form>
  )
}

export default LoginForm
