import { useState } from 'react'
import styles from '../../../styles/UserProfile/UserProfileDetail/UserProfileDetail.module.css'
import { UpdateButton } from '../UpdateProfileButton'

export const UpdateProfileDetail = props => {
  const [name, setName] = useState(props.user.username)
  const [email, setEmail] = useState(props.user.email)
  const [password, setPassword] = useState('')
  const [veryPassword, setVeryPassword] = useState('')

  console.log(props.user)

  const handleChangeName = e => {
    setName(e.target.value)
  }

  const handleChangePassword = e => {
    setPassword(e.target.value)
  }

  const handleVerifyPassword = e => {
    setVeryPassword(e.target.value)
  }

  let config = {}

  return (
    <form
      className={`${styles.detailContainer} ${styles.flexRow} ${styles.form}`}
      style={{ display: `${props.display}` }}
      //   style={{ display: `none` }}
    >
      <div className={`${styles.avatarContainer}`}></div>
      <div className={styles.infoContainerAndUpdate}>
        <div className={`${styles.infoContainer}`}>
          <div>
            <input
              className={`${styles.inputField}`}
              type="text"
              name="username"
              id="username"
              value={name}
              onChange={handleChangeName}
            />
          </div>
          <div>
            {/* <input
              className={`${styles.inputField}`}
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={handleChangeEmail}
            /> */}
            <div>{email}</div>
          </div>
          <div>
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
        <UpdateButton />
      </div>
    </form>
  )
}
