import styles from '../../../../styles/UserProfile/UserProfleCollection/CollectionDropList.module.css'
import { DefaultButton } from '../../../Button'
import { useState } from 'react'
import ClickChangeStyle from '../../../ClickChangeStyle'
import axios from 'axios'
import Modal from '../../../ModalComponents/Modal'
import useModal from '../../../ModalComponents/useModal'
// import {
//   EnterToSubmit,
//   handleInputChange,
//   handleKeyDown
// } from '../../../EnterSubmit'

export const CreateNewCollection = props => {
  const style = {
    backgroundColor: 'transparent',
    backgroundColorHover: 'rgba(255, 196, 131, 1)'
  }

  const [currentDisplay, setCurrentDisplay] = useState('none')

  const [message, setMessage] = useState()
  const [imageURL, setImageURL] = useState('')

  const { isShowing, toggle } = useModal()

  // let handleClick = props => {
  const styleElement = {
    default: 'none',
    change: 'block'
  }

  //   let newStyle
  //   if (currentDisplay == styleElement.default) {
  //     newStyle = styleElement.change
  //     console.log(1)
  //   } else {
  //     newStyle = styleElement.default
  //     console.log(2)
  //   }

  //   setCurrentDisplay(newStyle)
  // }

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
    // console.log('submit')
    try {
      const res = await axios.request(config)
      // console.log(res.data.message)
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
        btnFn={
          // console.log('hello') // navigate('/', { replace: true })
          // handleSubmit
          toggle
        }
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
          // onKeyDown={handleKeyDown(value)}
          // onChange={handleInputChange(setValue)}
        />
      </div>
    </>
  )
}
