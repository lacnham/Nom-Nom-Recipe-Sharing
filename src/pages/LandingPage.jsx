import React from 'react'
import styles from '../styles/LandingPage/LandingPage.module.css'
import { Button1 } from '../components/Button'
import Header from '../components/Header'
const LandingPage = () => {
  return (
    <div className={styles.page}>
      <div>
        <Header></Header>
      </div>
      <div className={styles.card}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.text}>
              <h1>Bring you to the world of food</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Sapiente non rerum incidunt, quas officia voluptas quam quasi
                officiis omnis. Saepe?
              </p>
              <Button1
                type={'button'}
                options={'Get Started!'}
                fn={console.log('Clicked!')}
              ></Button1>
            </div>
          </div>
        </div>
        <div className={styles.photoContainer}>
          <div className={styles.photo}></div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
