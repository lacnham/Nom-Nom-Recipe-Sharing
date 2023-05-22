import axios from 'axios'
import { useState, useEffect } from 'react'

export const FetchUserCollections = () => {
  let config = {
    method: 'get',
    maxBodlength: Infinity,
    url: 'http://localhost:3000/collection',
    headers: {
      Authorization: localStorage.accesstoken
    }
  }

  const [userCollections, setUserCollections] = useState([])

  useEffect(() => {
    axios
      .request(config)
      .then(res => {
        setUserCollections(res && res.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return userCollections
}
