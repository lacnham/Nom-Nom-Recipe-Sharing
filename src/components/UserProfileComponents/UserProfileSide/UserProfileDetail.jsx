import styles from '../../../styles/UserProfile/UserProfileDetail/UserProfileDetail.module.css'
import img from '../../../images/avatarTemp.png'
export const UserProfileDetail = props => {
  return (
    <div className={`${styles.detailContainer} ${styles.flexRow}`}>
      <div className={`${styles.avatarContainer}`}>
        <img src={img} alt="user avatar" />
      </div>
      <div className={`${styles.infoContainer}`}>
        <div>ID: {props.user.id}</div>
        <div>{props.user.name}</div>
        <div>@{props.user.email}</div>
      </div>
    </div>
  )
}
