import styles from '../../styles/UserProfile/UserProfileMainPage.module.css'

export const UpdateButton = ({ fn, className, style }) => {
  return (
    <button
      type="button"
      style={style}
      onClick={fn}
      className={`${styles.updateDeleteContainer} ${className}`}
    >
      Update
    </button>
  )
}
