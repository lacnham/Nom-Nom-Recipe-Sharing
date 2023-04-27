import styles from '../../../styles/UserProfile/UserProfileDetail/UserProfileDetail.module.css'
import img from '../../../images/avatarTemp.png'
import { AuthContext } from '../../SessionVerification/AuthContext'
import { useContext } from 'react'
import { FetchCurrentuser } from '../../FetchCurrentUser'

export const UserProfileDetail = () => {
  // const { user } = useContext(AuthContext)
  const user = FetchCurrentuser()
  console.log(user)
  if (!user) {
    return <div>Loading user data...</div>
  }

  return (
    <div className={`${styles.detailContainer} ${styles.flexRow}`}>
      <div className={`${styles.avatarContainer}`}>
        <img src={img} alt="user avatar" />
      </div>
      <div className={`${styles.infoContainer}`}>
        <div>ID: {user.user.id}</div>
        <div>{user.user.username}</div>
        <div>{user.user.email}</div>
      </div>
    </div>
  )
}
