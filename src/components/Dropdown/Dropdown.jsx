import React, { useState, useRef, useContext } from 'react'
import styles from '../../styles/Dropdown.module.css'
import { AuthContext } from '../SessionVerification/AuthContext'
import { Button2 } from '../Button'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
const Dropdown = props => {
  const navigate = useNavigate()
  const [imgUrl, setImgUrl] = useState('')

  const [isActive, setIsActive] = useState(false)
  const dropdownRef = useRef(null)

  const onClick = () => setIsActive(!isActive)

  const { logout, userData } = useContext(AuthContext)

  // console.log(userData.user.id)

  const handleLogout = () => {
    logout()
  }

  useEffect(() => {
    axios
      .get(`http://localhost:3000/user/get-avatar/${userData.user.id}`)
      .then(response => {
        setImgUrl(response.data)
        // Handle the response
        // console.log(response.data)
      })
      .catch(error => {
        // Handle the error
        console.error(error)
      })
  }, [])
  const onSelectOption = option => {
    window.location.href = `${option.link}`
    // navigate(`${option.link}`, { replace: true })
  }

  return (
    <div className={styles.dropdown}>
      <button className={styles.dropdownButton} onClick={onClick}>
        <span> {props.username} </span>
        <img
          src={imgUrl}
          // src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/df/df7789f313571604c0e4fb82154f7ee93d9989c6.jpg"
          alt="User avatar"
        />
      </button>
      <ul
        className={`${styles.dropdownMenu} ${isActive ? styles.active : ''}`}
        ref={dropdownRef}
      >
        {props.options.map(option => (
          <li key={option.id} onClick={() => onSelectOption(option)}>
            <i className={option.icon}></i>
            {option.title}
          </li>
        ))}
        <Button2
          fn={handleLogout}
          options={'Logout'}
          icon={<i className="fa-solid fa-right-from-bracket"></i>}
        ></Button2>
      </ul>
    </div>
  )
}

export default Dropdown
