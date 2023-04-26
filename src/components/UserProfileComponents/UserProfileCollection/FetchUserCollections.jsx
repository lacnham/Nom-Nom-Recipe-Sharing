import axios from 'axios'
import { useEffect, useState } from 'react'
// import { Login } from '../../Login'

export const FetchUserCollections = () => {
  // const userData = Login()

  let config = {
    method: 'get',
    maxBodlength: Infinity,
    url: 'http://localhost:3000/collection',
    headers: {
      Authorization: `${userData.accesstoken}`
    }
  }

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
