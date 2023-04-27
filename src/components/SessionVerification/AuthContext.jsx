import React, { useState, useEffect } from 'react'

export const AuthContext = React.createContext()



export const logout = async () => {
  try {
    const response = await fetch('http://localhost:3000/auth/logout', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken

      }
    });

    if (response.ok) {
      sessionStorage.removeItem('accessToken')
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


async function getAccessToken() {
  let accessToken = sessionStorage.getItem('accessToken');
  
  if (!accessToken) {
    try {
      const response = await fetch('http://localhost:3000/auth/refresh_token', {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        const data = await response.json();
        accessToken = data.accessToken;
        sessionStorage.setItem('accessToken', accessToken);
      } else {
        throw new Error('Error refreshing access token');
      }
    } catch (error) {
      return null    }
  }

  return accessToken;
}


const url = 'http://localhost:3000/user/my-profile'
const accessToken = await getAccessToken();


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
