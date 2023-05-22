import styles from '../../../../styles/UserProfile/UserProfleCollection/CollectionDropList.module.css'
import { DefaultButton } from '../../../Button'
import { useState } from 'react'
import ClickChangeStyle from '../../../ClickChangeStyle'
import axios from 'axios'
import Modal from '../../../ModalComponents/Modal'
import useModal from '../../../ModalComponents/useModal'

export const CreateNewCollection = props => {
  const style = {
    backgroundColor: 'transparent',
    backgroundColorHover: 'rgba(255, 196, 131, 1)'
  }

  const [currentDisplay, setCurrentDisplay] = useState('none')

  const [message, setMessage] = useState()
  const [imageURL, setImageURL] = useState('')

  const { isShowing, toggle } = useModal()

  const styleElement = {
    default: 'none',
    change: 'block'
  }

  let handleClick = ClickChangeStyle(
    currentDisplay,
    setCurrentDisplay,
    styleElement
  )

  const [value, setValue] = useState('')

  let config = {
    method: 'post',
    url: `http://localhost:3000/collection`,
    headers: {
      Authorization: localStorage.accesstoken
    },
    data: {
      name: value,
      note: '',
      recipeIds: [props.id]
    }
  }

  const handleSubmit = async () => {
    try {
      const res = await axios.request(config)
      setMessage(res.data.message)
      UploadCollectionImage(imageURL, res.data.collectionId)
      props.setCurrent('none')
      toggle()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Modal
        isShowing={isShowing}
        hide={toggle}
        btnMsg={'Confirm'}
        title={''}
        modalMsg={message}
        closeable={true}
        titleIcon={<i className="fa-solid fa-circle-check"></i>}
        btnFn={toggle}
      />
      <div className={`${styles.createNewCollection}`}>
        <DefaultButton
          fn={handleClick}
          options="Create new collection"
          type="button"
          style={style}
          className={`${styles.button}`}
        />
      </div>

      <div
        className={`${styles.searchBar} ${styles.hiddenInputField}`}
        style={{ display: `${currentDisplay}` }}
      >
        <input
          value={value}
          onChange={e => setValue(e.target.value)}
          onKeyPress={e => {
            if (e.key === 'Enter') {
              handleSubmit()
            }
          }}
          className={`${styles.inputFieldContainer} `}
        />
      </div>
    </>
  )
}
