import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styles from '../../styles/LoginAndSignUp/LoginAndSignUp.module.css'
import { Button2 } from '../Button'
import { renderDom } from 'react-dom'
import axios from 'axios'
const ResetPasswordForm = () => {
  const { resetToken, userId } = useParams()
  const [validToken, setValidToken] = useState(null)
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [resetSuccess, setResetSuccess] = useState(false)

  useEffect(() => {
    console.log(resetToken, userId)
    const resetPassword = async (resetToken, userId) => {
      try {
        const response = await fetch(
          `http://localhost:3000/reset-password/${resetToken}/${userId}`,
          {
            method: 'POST'
            // Additional request options (headers, body, etc.) can be included here
          }
        )
        const data = await response.json()
        console.log(data) // Process the response data
        if (data.msg === 'data and salt arguments required') {
          console.log('hello')
          setValidToken(true)
          console.log(validToken)
        }
      } catch (error) {
        setValidToken(false)
      }
    }
    console.log(resetPassword(resetToken, userId))
  })

  if (validToken === false) {
    if (resetSuccess) {
      return <h2>Password reset successful!</h2>
    } else {
      return <h2>Invalid or expired reset token.</h2>
    }
  }

  const handlePasswordChange = e => {
    setPassword(e.target.value)
  }

  const handleConfirmPasswordChange = e => {
    setConfirmPassword(e.target.value)
  }

  const handleFormSubmit = async e => {
    e.preventDefault()

    // Perform password validation
    if (password !== confirmPassword) {
      // Handle password mismatch error
      return
    }

    console.log(password, confirmPassword)

    try {
      const url = `http://localhost:3000/reset-password/${resetToken}/${userId}`
      const data = { password: password }

      const response = await axios.post(url, data, {
        method: 'post'
      })
      console.log(response.data) // Handle the response data as needed
      setResetSuccess(true)

      // Assuming the password reset was successful
    } catch (error) {
      console.error(error) // Handle the error
    }
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <div className={styles.inputContainer}>
        <i className={`${styles.icon} ${'fa-solid fa-lock'}`}></i>
        <input
          placeholder="Password"
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <div className={styles.inputContainer}>
        <i className={`${styles.icon} ${'fa-solid fa-lock'}`}></i>
        <input
          placeholder="Retype Password"
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
      </div>
      <Button2
        type={'submit'}
        options={'Reset Password'}
        fn={() => ''}
      ></Button2>
    </form>
  )
}

export default ResetPasswordForm
