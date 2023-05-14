import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styles from '../../styles/UserProfile/UserProfileDetail/UserProfileDetail.module.css'
import Modal from 'react-modal'
import ReactCrop from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'
import imageIcon from '/icons/image-icon.png'
import closeIcon from '/icons/close-icon.png'
import { Button1 } from '../Button'

const UpdateAvatar = props => {
  const [imgUrl, setImgUrl] = useState('')
  const [file, setFile] = useState(null)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [croppedImage, setCroppedImage] = useState(null)
  const [crop, setCrop] = useState({
    unit: 'px',
    width: 400,
    height: 400
  })
  const [imgErrorMsg, setImgErrorMsg] = useState('')
  const allowedTypes = ['image/png', 'image/jpeg', 'image/webp', 'image/jfif']

  Modal.setAppElement('#root')

  useEffect(() => {
    console.log('USERDATA', props)
    axios
      .get(`http://localhost:3000/user/get-avatar/${props.user.id}`)
      .then(response => {
        setImgUrl(response.data)
        // Handle the response
        // console.log(response.data)
      })
      .catch(error => {
        // Handle the error
        console.error(error)
      })
  }, [])

  const handleChange = e => {
    const selectedFile = e.target.files[0]
    setFile(e.target.files[0])
    console.log('LOGG:', e.target.files[0])
    setModalIsOpen(true)

    if (selectedFile && allowedTypes.includes(selectedFile.type)) {
      // Valid image file
      setImgErrorMsg('')
    } else {
      // Invalid file type
      setImgErrorMsg(
        'Invalid file type. Please upload a PNG, JPEG, WebP, or JFIF image.'
      )
    }
  }

  const config = {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }

  const openModal = () => {
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
  }

  const handleCropChange = crop => {
    setCrop(crop)
    if (file && crop.width && crop.height) {
      getCroppedImage(file, crop)
    }
  }

  const getCroppedImage = (file, crop) => {
    const image = new Image()
    image.src = URL.createObjectURL(file)

    image.onload = () => {
      const canvas = document.createElement('canvas')
      canvas.width = crop.width
      canvas.height = crop.height

      const ctx = canvas.getContext('2d')
      ctx.drawImage(
        image,
        crop.x,
        crop.y,
        crop.width,
        crop.height,
        0,
        0,
        crop.width,
        crop.height
      )

      canvas.toBlob(
        blob => {
          setCroppedImage(blob)
        },
        file.type,
        1
      )
    }
  }

  const handleSubmit = async e => {
    e.preventDefault()

    if (croppedImage) {
      const formData = new FormData()
      console.log(croppedImage, file.name)
      formData.append('avatarImage', croppedImage, file.name)

      try {
        const response = await axios.post(
          `http://localhost:3000/user/update-avatar/${props.user.id}`,
          formData
        )

        console.log(response.data)
        window.location.reload()
        // Close the modal after successful upload
        setModalIsOpen(false)
      } catch (error) {
        console.error(error)
        // Handle the error
      }
    }
  }

  return (
    <>
      <div className={`${styles.avatarSmallContainer}`}>
        {/* <img src={imgUrl} alt="Avatar" /> */}
        <img src="/src/images/avatarTemp.png" alt="Avatar"></img>
        <div className={`${styles.updateImgTextContainer}`} onClick={openModal}>
          <i className="fa-solid fa-pen-to-square fa-2xl"></i>
        </div>
      </div>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <h2>Update Image:</h2>
        <div
          style={{
            paddingBottom: '1.4rem',
            paddingLeft: '1rem',
            color: 'rgba(0, 0, 0, 0.6)'
          }}
        >
          <p>
            * You click 'Submit' the image after dragging the crop box to area
            you want.
          </p>
          <p>
            * A square-shaped crop is recommended to avoid image distortion.
          </p>
          {imgErrorMsg != '' && (
            <p
              style={{
                paddingTop: '0.5rem',
                color: 'rgba(231, 0, 0, 0.59)'
              }}
            >
              **{imgErrorMsg}**
            </p>
          )}
        </div>

        <ReactCrop
          crop={crop}
          onChange={handleCropChange}
          style={{ maxWidth: '100%' }}
          onComplete={crop => {
            setCroppedImage(crop)
            console.log('CROPPED IMAGE:', croppedImage)
          }}
        >
          {file && <img src={URL.createObjectURL(file)} alt="Avatar" />}
        </ReactCrop>

        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="file"
              name="avatarImage"
              id="avatarImage"
              onChange={handleChange}
            />
          </div>
          <Button1 type="submit" options={'Submit'} />
        </form>
        <span className={`${styles.closeIconDiv}`} onClick={closeModal}>
          <i className="fa-solid fa-xmark fa-lg"></i>
        </span>
      </Modal>
    </>
  )
}

export default UpdateAvatar
