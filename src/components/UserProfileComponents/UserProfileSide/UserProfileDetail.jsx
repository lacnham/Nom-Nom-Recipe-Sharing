import styles from '../../../styles/UserProfile/UserProfileDetail/UserProfileDetail.module.css'
import img from '../../../images/avatarTemp.png'
import { FetchCurrentuser } from '../../FetchCurrentUser'
export const UserProfileDetail = () => {
  const userData = FetchCurrentuser()
  // console.log(userData.user.id)
  return (
    // <></>
    <div className={`${styles.detailContainer} ${styles.flexRow}`}>
      <div className={`${styles.avatarContainer}`}>
        <img src={img} alt="user avatar" />
      </div>
      <div className={`${styles.infoContainer}`}>
        <div>ID: {userData.user.id}</div>
        <div>{userData.user.username}</div>
        <div>{userData.user.email}</div>
      </div>
    </div>
  )
}
