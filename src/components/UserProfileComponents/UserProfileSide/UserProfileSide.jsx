import styles from '../../../styles/UserProfile/UserProfileMainPage.module.css'
import { UserProfileDetail } from './UserProfileDetail'
import { UserProfileTab } from './UserProfileTab'

const UserProfileSide = (props) => {
  const user = {
    id: '12123',
    name: 'Khoi Nguyen',
    email: 'khoinehehe'
  }

  return (
    <div
      className={`${styles.userProfileSideMainContainer} ${styles.flexColumn}`}
    >
      <UserProfileDetail user={user}></UserProfileDetail>
      <UserProfileTab setSection={props.setSection}></UserProfileTab>
    </div>
  )
}

export default UserProfileSide
