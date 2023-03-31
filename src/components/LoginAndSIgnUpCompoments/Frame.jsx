import styles from '../../styles/LoginAndSignUp/LoginAndSignUp.module.css'

export default function Frame({ Name, Form, Redirect }) {
  return (
    <div className={styles.page}>
      <div>Nav Bar goes here</div>
      <div className={styles.card}>
        <div className={styles.photoContainer}>
          <div className={styles.photo}></div>
        </div>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.text}>
              <h1>{Name}</h1>
              {Form}
              <hr />
              {Redirect}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
