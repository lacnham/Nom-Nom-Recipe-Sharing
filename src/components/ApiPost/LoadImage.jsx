import axios from 'axios'
import { useEffect, useState } from 'react'
import { Form } from 'react-router-dom'

export const UploadImage = async (image, id, setMessage) => {
  console.log('work roi ne ba')
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

  console.log('cai id de upload image ne', id)
  try {
    const res = await axios.post(URL, formData, config)
  } catch (error) {
    setMessage(error)
  }
}

export const UploadCollectionImage = async (image, id) => {
  const allowedTypes = ['image/png', 'image/jpeg', 'image/webp', 'image/jfif']

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
    setMessage(error)
  }
}
