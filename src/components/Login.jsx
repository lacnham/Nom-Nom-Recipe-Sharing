import axios from 'axios'
import { useEffect, useState } from 'react'

export const LLogin = () => {
  let config = {
    method: 'post',
    url: 'http://localhost:3000/auth/login',
    data: {
      email: 'mock1@gmail.com',
      password: '1234567'
    }
  }

  const [accesstoken, setAccesstoken] = useState('')
  const [userData, setUserData] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.request(config).catch(console.error())
      setUserData(res.data)
      //   setAccesstoken(localStorage.getItem('accesstoken'))
    }
    fetchData()
  }, [])
  console.log(localStorage.getItem('accesstoken'))

  return userData
}
