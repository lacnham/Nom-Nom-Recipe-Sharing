import { useState } from 'react'
import styles from '../styles/Button.module.css'

export function Button1({ fn, options, type, icon }) {
  return (
    <button type={type} className={styles.button1} onClick={fn}>
      {icon}
      {options}
    </button>
  )
}

export function Button2({ fn, options, type, icon }) {
  return (
    <button type={type} className={styles.button2} onClick={fn}>
      {icon}
      {options}
    </button>
  )
}

export function DisabledButton({ options, icon }) {
  return (
    <button className={styles.disabledButton} disabled>
      {icon}
      {options}
    </button>
  )
}

export function DefaultButton({
  fn,
  options,
  type,
  style,
  className,
  handleBlur
}) {
  const [isHover, setIsHover] = useState(false)
  const [isFocus, setIsFocus] = useState(false)

  const handleMouseIn = () => {
    setIsHover(true)
  }

  const handleMouseOut = () => {
    setIsHover(false)
  }

  const handleFocus = () => {
    setIsFocus(true)
  }

  const blur = () => {
    setIsFocus(false)
  }

  let styleTemp = {
    backgroundColor:
      isHover || isFocus ? style.backgroundColorHover : style.backgroundColor,
    color: isHover || isFocus ? style.colorHover : style.color
  }
  return (
    <button
      type={type}
      style={styleTemp}
      className={`${className}`}
      onClickCapture={fn}
      onMouseEnter={handleMouseIn}
      onMouseLeave={handleMouseOut}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onBlurCapture={blur}
    >
      {options}
    </button>
  )
}
