import styles from '../../../styles/UserProfile/UserProfileDetail/UserProfileDetail.module.css'
import img from '../../../images/avatarTemp.png'
import { AuthContext } from '../../SessionVerification/AuthContext'
import { useContext } from 'react'
import { FetchCurrentuser } from '../../FetchCurrentUser'
import { UpdateButton } from '../UpdateProfileButton'

export const UserProfileDetail = () => {
  const { userData } = useContext(AuthContext)
  // const user = FetchCurrentuser()
  // console.log('user ++++' + userData.user.id)
  if (!userData) {
    return <div>Loading user data...</div>
  }

  return (
    <div className={`${styles.detailContainer} ${styles.flexRow}`}>
      <div className={`${styles.avatarContainer}`}>
        <img src={img} alt="user avatar" />
      </div>
      <div className={`${styles.infoContainerAndUpdate}`}>
        <div className={`${styles.infoContainer}`}>
          <div>ID: {userData.user.id}</div>
          <div>{userData.user.username}</div>
          <div>{userData.user.email}</div>
        </div>

        <UpdateButton />
      </div>
    </div>
  )
}
