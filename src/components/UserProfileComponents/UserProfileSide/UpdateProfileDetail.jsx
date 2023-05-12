import { useEffect, useState } from 'react'
import styles from '../../../styles/UserProfile/UserProfileDetail/UserProfileDetail.module.css'
import { UpdateButton } from '../UpdateProfileButton'

export const UpdateProfileDetail = props => {
  const [name, setName] = useState(props.user.username)
  const [email, setEmail] = useState(props.user.email)
  const [password, setPassword] = useState('')
  const [veryPassword, setVeryPassword] = useState('')
  const [data, setData] = useState({})

  // console.log(props.user)

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
    setData({
      username: name,
      password: password,
      verifypassword: veryPassword
    })

    console.log(data)
  }, [name, password, veryPassword])

  let config = {}

  const userDataUpdate = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/update-dietary-preference/${userData.user.id}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }
      )

      if (response.ok) {
        console.log('Data sent successfully.')
      } else {
        console.error(
          'Failed to send data:',
          response.status,
          response.statusText
        )
      }
    } catch (error) {
      console.error('Error while sending data:', error)
    }
  }

  return (
    <form
      autocomplete="off"
      className={`${styles.formContainer} ${styles.flexRow} ${styles.form}`}
      //   style={{ display: `none` }}
    >
      <div className={styles.infoUpdate}>
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
            type="new-password"
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
            type="new-password"
            name="verify password"
            id="verify password"
            placeholder="Re-type password"
            value={veryPassword}
            onChange={handleVerifyPassword}
          />
        </div>
        <UpdateButton fn={() => console.log('hello')} />
      </div>
    </form>
  )
}
