import styles from '../../../styles/UserProfile/UserProfileDetail/UserProfileDetail.module.css'
import img from '../../../images/avatarTemp.png'
import { AuthContext } from '../../SessionVerification/AuthContext'
import { useContext, useState } from 'react'
import { FetchCurrentuser } from '../../FetchCurrentUser'
import { UpdateButton } from '../UpdateProfileButton'
import { UpdateProfileDetail } from './UpdateProfileDetail'
import useModal from '../../ModalComponents/useModal'
import Modal from '../../../components/ModalComponents/Modal'
import UpdateAvatar from '../UpdateAvatar'

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
    toggle()
    // setDisplay('flex')
    // setProfileDisplay('none')
  }
  const { isShowing, toggle } = useModal()

  return (
    <div className={`${styles.detailMainContainer}`}>
      <Modal
        isShowing={isShowing}
        hide={toggle}
        btnMsg={'Close'}
        title={'User Profile Update'}
        modalMsg={<UpdateProfileDetail user={userData.user} />}
        // closeable={true}
        titleIcon={<i className="fa-solid fa-note-sticky"></i>}
        btnFn={() => {
          toggle()
        }}
      />
      {/* <div
        className={`${styles.detailContainer} ${styles.flexRow}`}
        style={{ display: `${profileDisplay}` }}
      > */}
      <div className={`${styles.detailContainer}`}>
        <div className={`${styles.avatarContainer}`}>
          <img src={img} alt="user avatar" />
          <div className={`${styles.avatarContainer}`}>
            {/* <img src={img} alt="user avatar" /> */}
            <UpdateAvatar user={userData.user} />
          </div>
          <div className={`${styles.infoContainer}`}>
            <div className={`${styles.infoContainer}`}>
              <div>ID: {userData.user.id}</div>
              <h2>{userData.user.username}</h2>
              <div>
                <i className="fa-solid fa-envelope"></i>
                {userData.user.email}
              </div>
            </div>

            <UpdateButton fn={() => handleClick()} option={'Update'} />
          </div>
        </div>
      </div>
    </div>
  )
}
