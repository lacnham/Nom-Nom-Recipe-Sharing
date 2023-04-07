import { useState } from 'react'
import styles from '../styles/Button.module.css'

export function Button1 ({ fn, options, type }) {
  return (
    <button type={type} className={styles.button1} onClick={() => fn()}>
      {options}
    </button>
  )
}

export function Button2 ({ fn, options, type }) {
  return (
    <button type={type} className={styles.button2} onClick={() => fn()}>
      {options}
    </button>
  )
}

export function DefaultButton ({ fn, options, type, style, className }) {
  const [isHover, setIsHover] = useState(false)

  const handleMouseIn = () => {
    setIsHover(true)
  }
  const handleMouseOut = () => {
    setIsHover(false)
  }
  let styleTemp = {
    backgroundColor: isHover
      ? style.backgroundColorHover
      : style.backgroundColor,
    color: isHover ? style.colorHover : style.color
  }
  return (
    <button
      type={type}
      style={styleTemp}
      className={className}
      onClickCapture={fn}
      onMouseEnter={handleMouseIn}
      onMouseLeave={handleMouseOut}
    >
      {options}
    </button>
  )
}
