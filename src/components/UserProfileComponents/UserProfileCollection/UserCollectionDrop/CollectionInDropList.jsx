import { useEffect, useState } from 'react'
import styles from '../../../../styles/UserProfile/UserProfleCollection/CollectionDropList.module.css'
import axios from 'axios'
import Modal from '../../../ModalComponents/Modal'
import useModal from '../../../ModalComponents/useModal'
import { UploadCollectionImage } from '../../../ApiPost/LoadImage'

export const CollectionInDropList = props => {
  const [message, setMessage] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)

  const { isShowing, toggle } = useModal()

  const handleBlur = () => {
    let newStyle
    if (props.current == props.style.change) {
      newStyle = props.style.default
      console.log(2)
    }
    props.setCurrent(newStyle)
  }

  let config = {
    method: 'post',
    url: 'http://localhost:3000/collection/add-recipe',
    headers: {
      Authorization: localStorage.accesstoken
    },
    data: {
      collection_id: props.collection.collection_id,
      recipe_id: props.id
    }
  }

  const handleAddRecipe = async () => {
    try {
      const res = await axios.request(config)
      setMessage(res.data.message)

      setIsSuccess(true)
      handleBlur()
      toggle()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div
      className={`${styles.item}`}
      id={props.collection.id}
      onClick={handleAddRecipe}
    >
      <Modal
        isShowing={isShowing}
        hide={toggle}
        btnMsg={'Confirm'}
        title={''}
        modalMsg={message}
        closeable={true}
        titleIcon={<i className="fa-solid fa-circle-check"></i>}
        btnFn={''}
      />
      {props.collection.name}
    </div>
  )
}
