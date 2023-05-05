import axios from 'axios'
import { useState, useEffect } from 'react'

export const FetchUserCollections = () => {
  // const userData = Login()

  let config = {
    method: 'get',
    maxBodlength: Infinity,
    url: 'http://localhost:3000/collection',
    headers: {
      Authorization: localStorage.accesstoken
    }
  }

  console.log(localStorage.accessToken)

  const [userCollections, setUserCollections] = useState([])

  useEffect(() => {
    axios
      .request(config)
      .then(res => {
        setUserCollections(res && res.data)
        // console.log(data)
        // setIsLoading(false)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return userCollections
}
