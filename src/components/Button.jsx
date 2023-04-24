import styles from '../styles/Button.module.css'

export function Button1({ fn, options, type, icon }) {
  return (
    <button type={type} className={styles.button1} onClick={() => fn} >
      {icon}{options}
    </button>
  )
}

export function Button2({ fn, options, type }) {
  return (
    <button type={type} className={styles.button2} onClick={() => fn}>
      {options}
    </button>
  )
}
