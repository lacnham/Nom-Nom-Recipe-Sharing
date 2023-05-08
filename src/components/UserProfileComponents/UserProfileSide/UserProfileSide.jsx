import styles from '../../../styles/UserProfile/UserProfileMainPage.module.css'
import { UserProfileDetail } from './UserProfileDetail'
import { UserProfileTab } from './UserProfileTab'

const UserProfileSide = props => {
  return (
    <div
      className={`${styles.userProfileSideMainContainer} ${styles.flexColumn}`}
    >
      <UserProfileDetail></UserProfileDetail>
      <div className={`${styles.tabContainer} ${styles.flexRow}`}>
        <UserProfileTab
          name={'My collection'}
          id={1}
          setDisplay={props.setDisplay}
        />
        <UserProfileTab
          name={'My recipe'}
          id={2}
          setDisplay={props.setDisplay}
        />
      </div>
    </div>
  )
}

export default UserProfileSide
