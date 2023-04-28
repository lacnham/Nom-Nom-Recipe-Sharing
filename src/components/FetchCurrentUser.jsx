import axios from 'axios'
import { useEffect, useState } from 'react'

export const FetchCurrentuser = () => {
  let config = {
    method: 'get',
    url: `http://localhost:3000/user/my-profile`,
    headers: {
      // 'Content-Type': 'application/json',
      Authorization: localStorage.accessToken
    }
  }

  const [userData, setUserData] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.request(config).catch(console.error())
      setUserData(res.data)
      // .then(setUserData(res.data))
      // .catch(error => {
      //   console.log(error)
      // })
    }
    fetchData()
  }, [])

  // console.log(localStorage.getItem('accesstoken'))

  // console.log(userData)

  return userData
}
