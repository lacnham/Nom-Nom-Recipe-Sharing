import React, { useState, useEffect, lazy, Suspense } from 'react'
import axios from 'axios'
import Header from '../components/Header'
import styles from '../styles/DietPage/DietPage.module.css'
import { withoutAuth } from '../components/SessionVerification/AuthChecking'
import { Button1 } from '../components/Button'
import { useContext } from 'react'
import { AuthContext } from '../components/SessionVerification/AuthContext'
const Diet = () => {
  //diet data
  const { dietData } = useContext(AuthContext)
  const [dietaryPreferences, setDietaryPreferences] = useState(null)

  useEffect(() => {
    if (dietData) {
      setDietaryPreferences(
        dietData.msg.map(preference => preference.dietary_preference_name)
      )
    }
  }, [dietData])

  const [checkedDivContent, setCheckedDivContent] = useState([])

  function findCheckedDivContent() {
    const checkedDivs = document.querySelectorAll('div#checked')
    const contentArray = []
    checkedDivs.forEach(div => {
      contentArray.push(div.querySelector('p').innerHTML)
    })
    setCheckedDivContent(contentArray) // Update the state variable
  }

  // This useEffect hook will log the checkedDivContent array
  // whenever it is updated.
  useEffect(() => {
    console.log(checkedDivContent)
  }, [checkedDivContent])

  useEffect(() => {
    findCheckedDivContent
  }, [])

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

  const DietCard = lazy(() => import('../components/DietCard'))

  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.dietCard}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.text}>
              <h1>Select Your Diet Plan</h1>
              <div>
                <div className={styles.dietCardContainer}>
                  {diet.map(diet_plan => (
                    <div
                      key={diet_plan.name}
                      onChange={() => {
                        findCheckedDivContent()
                      }}
                    >
                      <Suspense fallback={<div>Loading...</div>}>
                        <DietCard
                          title={diet_plan.name}
                          data={dietaryPreferences}
                        />
                      </Suspense>
                    </div>
                  ))}
                  <div keyword="place_holder"></div>
                </div>
              </div>
              <Button1
                type={'button'}
                options={'Save'}
                fn={() => {
                  findCheckedDivContent()
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withoutAuth(Diet)
