import styles from '../../styles/LoginAndSignUp/LoginAndSignUp.module.css'
import { Button2 } from '../Button'
import React, { useState } from 'react'
import axios from 'axios'

const RecoverForm = () => {
  const [email, setEmail] = useState('')
  const handleSubmit = async e => {
    axios
      .post('http://localhost:3000/forgot-password', {
        email: email
      })
      .then(response => {
        console.log(response.data)
      })
      .catch(error => {
        console.error(error)
      })
  }

  return (
    <form
    onSubmit={handleSubmit} method='POST'
    >
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

        <div className={styles.psw}>
          <span>
            <a href="#">Forgot password?</a>
          </span>
        </div>
        <div className={styles.btnContainer}>
          <Button2 type={'submit'} options={'Submit'} fn={() => ''}></Button2>
        </div>
      </div>
    </form>
  )
}

export default RecoverForm
