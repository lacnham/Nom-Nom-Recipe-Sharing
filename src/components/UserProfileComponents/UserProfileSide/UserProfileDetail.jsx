import styles from '../../../styles/UserProfile/UserProfileDetail/UserProfileDetail.module.css'
import img from '../../../images/avatarTemp.png'
import { AuthContext } from '../../SessionVerification/AuthContext'
import { useContext, useEffect, useState } from 'react'
import { FetchCurrentuser } from '../../FetchCurrentUser'
import { UpdateButton } from '../UpdateProfileButton'
import { Button1 } from '../../Button'
import { UpdateProfileDetail } from './UpdateProfileDetail'
import useModal from '../../ModalComponents/useModal'
import Modal from '../../../components/ModalComponents/Modal'
import UpdateAvatar from '../UpdateAvatar'

export const UserProfileDetail = () => {
  const { userData } = useContext(AuthContext)
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)

  const [parentMessage, setParentMessage] = useState(data)

  useEffect(() => {
    console.log(parentMessage)
  }, [parentMessage])

  const handleParentData = data => {
    setParentMessage(data)
  }

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
  }
  const { isShowing, toggle } = useModal()

  const userDataUpdate = async data => {
    try {
      const response = await fetch(
        `http://localhost:3000/user/update-profile/${userData.user.id}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }
      )

      const responseData = await response.json() // Parse response body as JSON
      setError(responseData.msg)
      console.log(error)
      console.log(response)

      if (response.ok) {
        console.log('Data sent successfully.')
        setSuccess(true)
        console.log(success)
      } else {
        console.log(response)
      }
    } catch (error) {
      console.log(response)
    }
  }

  return (
    <div className={`${styles.detailMainContainer}`}>
      <Modal
        isShowing={isShowing}
        hide={toggle}
        btnMsg={'Close'}
        title={'User Profile Update'}
        modalMsg={
          <div>
            {success ? <>hello</> : <p>hi</p>}
            {success ? (
              <div>
                <UpdateProfileDetail
                  props={userData.user}
                  onDataFromChild={handleParentData}
                  error={error}
                />
              </div>
            ) : (
              <p>User Data Updated</p>
            )}
          </div>
        }
        closeable={true}
        titleIcon={<i className="fa-solid fa-note-sticky"></i>}
        extraButton={
          <Button1
            fn={() => {
              userDataUpdate(parentMessage)
              console.log('hello')
            }}
            options={'Confirm'}
          />
        }
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
  )
}
