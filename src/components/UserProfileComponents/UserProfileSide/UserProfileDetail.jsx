import styles from '../../../styles/UserProfile/UserProfileDetail/UserProfileDetail.module.css'
import img from '../../../images/avatarTemp.png'
import { AuthContext } from '../../SessionVerification/AuthContext'
import { useContext, useState } from 'react'
import { FetchCurrentuser } from '../../FetchCurrentUser'
import { UpdateButton } from '../UpdateProfileButton'
import { UpdateProfileDetail } from './UpdateProfileDetail'

export const UserProfileDetail = () => {
  const { userData } = useContext(AuthContext)
  // const user = FetchCurrentuser()
  // console.log('user ++++' + userData.user.id)
  if (!userData) {
    return <div>Loading user data...</div>
  }

  const [state, setState] = useState()

  const [display, setDisplay] = useState('none')
  const [profileDisplay, setProfileDisplay] = useState('flex')

  const handleClick = () => {
    setDisplay('flex')
    setProfileDisplay('none')
  }

  return (
    <div className={`${styles.detailMainContainer}`}>
      <div
        className={`${styles.detailContainer} ${styles.flexRow}`}
        style={{ display: `${profileDisplay}` }}
      >
        <div className={`${styles.avatarContainer}`}>         
          <img src={img} alt="user avatar" />
        </div>
        <div className={`${styles.infoContainerAndUpdate}`}>
          <div className={`${styles.infoContainer}`}>
            <div>ID: {userData.user.id}</div>
            <div>{userData.user.username}</div>
            <div>{userData.user.email}</div>
          </div>
          <UpdateButton fn={handleClick} option={'Update'} />
        </div>
      </div>
      <UpdateProfileDetail user={userData.user} display={display} />
    </div>
  )
}
