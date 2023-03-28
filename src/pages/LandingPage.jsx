import React from 'react'
import Sound from '../components/Sound'
import catLogo from '/images/cat.gif'
import styles from '../styles/LandingPage.module.css'

const LandingPage = () => {
  return (
    <div className={styles.container}>
      <Sound />
      <div>
        <img src={catLogo} className="logo" alt="cat logo" />
        <p>Chán học đi quẩy 🫠👄</p>
      </div>
    </div>
  )
}

export default LandingPage
