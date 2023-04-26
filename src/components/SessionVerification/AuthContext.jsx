import React, { useState, useEffect } from 'react'

export const AuthContext = React.createContext()


export const logout = async () => {
  try {
    const response = await fetch('http://localhost:3000/auth/logout', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.accessToken
      }
    });

    if (response.ok) {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      console.log("this is logout");
      window.location.reload();
    } else {
      throw new Error('Error logging out');
    }
  } catch (error) {
    console.error('Error logging out:', error);
  }
};



const url = 'http://localhost:3000/user/my-profile'
const accessToken = localStorage.accessToken

const AuthContextProvider = props => {
  const [userData, setUserData] = useState(null)
  // const [backendMsg, setBackendMsg] = useState(null)

  const getUserSession = async () => {
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: accessToken
        }
      })
      const data = await response.json()
      if (!response.ok) {
        throw new Error(data.msg)
      }
      return data
    } catch (error) {
      // setBackendMsg(error.message)
      return null
    }
  }

  useEffect(() => {
    getUserSession()
      .then(data => {
        setUserData(data)
      })
      .catch(error => {
        setUserData(null)
      })
  }, [])

  return (
    // <AuthContext.Provider value={{ userData, backendMsg }}>
    <AuthContext.Provider value={{ userData, logout }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
