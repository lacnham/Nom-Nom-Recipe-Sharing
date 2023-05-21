import axios from 'axios'
import { useEffect, useState } from 'react'
import { Form } from 'react-router-dom'

export const UploadImage = async (image, id) => {
  const allowedTypes = ['image/png', 'image/jpeg', 'image/webp', 'image/jfif']

  const formData = new FormData()
  formData.append('recipeImage', image, image.name)
  let config = {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: localStorage.accesstoken
    }
  }
  let URL = `http://localhost:3000/recipe/update-img/${id}`
  console.log('log them cai id nua', id)
  console.log('log cai image ra coi choi', image)
  try {
    const res = await axios.post(URL, formData, config)
  } catch (error) {
    console.log(error)
  }
}

export const DefaultImage = async () => {
  const defaultImage = 'src/images/Default_img.svg'

  const [defaultFile, setDefaultFile] = useState()

  useEffect(() => {
    fetch(defaultImage)
      .then(res => res.blob())
      .then(blob => {
        const defaultFileS = new File([blob], 'default-img.jpg', {
          type: 'image/jpeg'
        })
        // setImageURL(defaultFile)

        setDefaultFile(defaultFileS)
      })
  }, [])
  console.log('image default moi ne ba', defaultFile)
  return { defaultFile }
}

export const UploadCollectionImage = async (image, id) => {
  const allowedTypes = ['image/png', 'image/jpeg', 'image/webp', 'image/jfif']

  // const [imageURL, setImageURL] = useState()

  console.log('image ne oi', image)

  const formData = new FormData()
  formData.append('collectionImage', image, image.name)

  let config = {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: localStorage.accesstoken
    }
  }
  let URL = `http://localhost:3000/collection/update-img/${id}`

  // console.log('cai id de upload image ne', id)
  try {
    const res = await axios.post(URL, formData, config)
  } catch (error) {
    console.log(error)
  }
}
