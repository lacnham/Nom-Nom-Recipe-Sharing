import React, { useState, useRef, useContext } from 'react'
import styles from '../../styles/Dropdown.module.css'
import { AuthContext } from '../SessionVerification/AuthContext'
import { Button2 } from '../Button'
import { useNavigate } from 'react-router-dom'

const Dropdown = props => {
  const navigate = useNavigate()

  const [isActive, setIsActive] = useState(false)
  const dropdownRef = useRef(null)

  const onClick = () => setIsActive(!isActive)

  const { logout } = useContext(AuthContext)

  const handleLogout = () => {
    logout()
  }

  const onSelectOption = option => {
    setIsActive(false)
    navigate(`${option.link}`)
  }

  return (
    <div className={styles.dropdown}>
      <button className={styles.dropdownButton} onClick={onClick}>
        <span> {props.username} </span>
        <img
          src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/df/df7789f313571604c0e4fb82154f7ee93d9989c6.jpg"
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
