import axios from 'axios'
import { useEffect, useState } from 'react'

export const FetchCurrentuser = () => {
  let config = {
    method: 'get',
    url: `http://localhost:3000/user/my-profile`,
    headers: {
      // 'Content-Type': 'application/json',
      Authorization: localStorage.accesstoken
    }
  }

  const [userData, setUserData] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.request(config).catch(console.error())
      setUserData(res.data)
    }
    fetchData()
  }, [])

  return userData
}
