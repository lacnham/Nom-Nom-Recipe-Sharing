import React, { useState, useEffect, lazy, Suspense } from 'react'
import axios from 'axios'
import Header from '../components/Header'
import styles from '../styles/DietPage/DietPage.module.css'
import { withoutAuth } from '../components/SessionVerification/AuthChecking'

const Diet = () => {
  const [diet, setDiet] = useState([])

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/dietary/get-all')
      setDiet(response.data) // do something with the data
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  console.log(diet)

  const DietCard = lazy(() => import('../components/DietCard'))

  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.dietCard}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.text}>
              <h1>Hello</h1>
              <div>
                <div className={styles.dietCardContainer}>
                  <div>
                    <Suspense
                      fallback={<div className={styles.dietCardLazyLoading}></div>}
                    >
                      <DietCard />
                    </Suspense>
                  </div>
                  <div keyword="place_holder"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withoutAuth(Diet)
