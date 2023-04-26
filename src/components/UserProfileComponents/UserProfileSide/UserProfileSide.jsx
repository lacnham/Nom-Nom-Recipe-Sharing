import styles from '../../../styles/UserProfile/UserProfileMainPage.module.css'
import { UserProfileDetail } from './UserProfileDetail'
import { UserProfileTab } from './UserProfileTab'

const UserProfileSide = props => {
  return (
    <div
      className={`${styles.userProfileSideMainContainer} ${styles.flexColumn}`}
    >
      <UserProfileDetail></UserProfileDetail>
      <UserProfileTab setSection={props.setSection}></UserProfileTab>
    </div>
  )
}

export default UserProfileSide
