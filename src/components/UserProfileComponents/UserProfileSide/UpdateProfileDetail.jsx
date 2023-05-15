import { useEffect, useState } from 'react'
import styles from '../../../styles/UserProfile/UserProfileDetail/UserProfileDetail.module.css'
import { UpdateButton } from '../UpdateProfileButton'

export const UpdateProfileDetail = ({ props, onDataFromChild, error }) => {
  const [name, setName] = useState(props.username)
  const [email, setEmail] = useState(props.email)
  const [password, setPassword] = useState('')
  const [veryPassword, setVeryPassword] = useState('')
  const [data, setData] = useState({})

  console.log(props)

  const [childMessage, setChildMessage] = useState('')

  const handleChangeName = e => {
    setName(e.target.value)
  }

  const handleChangePassword = e => {
    setPassword(e.target.value)
  }

  const handleVerifyPassword = e => {
    setVeryPassword(e.target.value)
  }

  useEffect(() => {
    console.log(name, password)
    const updatedData = {
      username: name,
      password: password,
      verifypassword: veryPassword
    }
    setData(updatedData)
    handleChildData(updatedData)
  }, [name, password, veryPassword])

  const handleChildData = updatedData => {
    setChildMessage(updatedData)
    onDataFromChild(updatedData)
  }

  return (
    <form
      autoComplete="off"
      className={`${styles.formContainer} ${styles.flexRow} ${styles.form}`}
      //   style={{ display: `none` }}
    >
      <div className={styles.infoUpdate}>
        {error ? <div className={styles.warning}>{error}</div> : ''}

        <div>
          <label>Username:</label>
          <input
            className={`${styles.inputField}`}
            type="text"
            name="username"
            id="username"
            value={name}
            onChange={handleChangeName}
          />
        </div>
        {/* <div>
          <input
              className={`${styles.inputField}`}
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={handleChangeEmail}
            />
          <div>{email}</div>
        </div> */}
        <div>
          <label>Password:</label>
          <input
            className={`${styles.inputField}`}
            type="password"
            name="password"
            id="password"
            placeholder="New password"
            value={password}
            onChange={handleChangePassword}
          />
        </div>
        <div>
          <label>Retype-Password:</label>
          <input
            className={`${styles.inputField}`}
            type="password"
            name="verify password"
            id="verify password"
            placeholder="Re-type password"
            value={veryPassword}
            onChange={handleVerifyPassword}
          />
        </div>
      </div>
    </form>
  )
}
