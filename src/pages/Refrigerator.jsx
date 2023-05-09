import React, { useState, useEffect, useMemo, lazy, Suspense } from 'react'
import axios from 'axios'
import Header from '../components/Header'
import styles from '../styles/RefrigeratorPage/Refrigerator.module.css'
import { withoutAuth } from '../components/SessionVerification/AuthChecking'
import { BackToTopButton } from '../components/Button'
import Select from 'react-select'
import { Button2 } from '../components/Button'
import AutoClickButton from '../components/AutoClickButton'
import { Link } from 'react-router-dom'

const Refrigerator = () => {
  const [firstTime, setFirstTime] = useState(true)

  const [ingData, setIngData] = useState([])

  const perLoad = 12

  const [data, setData] = useState([])
  const [itemsToRender, setItemsToRender] = useState(0)

  const handleSubmit = async event => {
    event.preventDefault()
    // Additional form submission logic here
    setFirstTime(false)
    try {
      const response = await axios.get('http://localhost:3000/recipe')
      setData(response.data)
    } catch (error) {
      console.log(error)
      setData([])
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setItemsToRender(prev => prev + perLoad)
          }
        })
      },
      { rootMargin: '0px 0px 10px 0px' } // Load next batch before the bottom of the page
    )

    const bottomElement = document.querySelector('#bottom')
    if (bottomElement) {
      observer.observe(bottomElement)
    }

    return () => {
      if (bottomElement) {
        observer.unobserve(bottomElement)
      }
    }
  }, [perLoad])

  async function fetchData() {
    try {
      const response = await fetch('http://localhost:3000/ingredient/get-all')
      const data = await response.json()

      // Extract ing_name from each child
      const extractedData = data.map(child => child.ing_name)
      setIngData(
        extractedData.map(item => ({
          value: item,
          label: item
        }))
      )
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  // Call the fetchData function to initiate the data fetching process
  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    console.log(ingData)
  }, [ingData])

  const Card = lazy(() => import('../components/Card'))

  return (
    //
    <div className="page" id="botton">
      <Header />
      <BackToTopButton />
      <div className={styles.text}>
        <h1>Hello</h1>
        <div className={styles.form_Container}>
          <form
            onSubmit={handleSubmit}
            //method="POST"
          >
            <div className={styles.filter_Container}>
              <Select
                className="basic-single"
                classNamePrefix="select"
                isClearable={true}
                isSearchable={true}
                options={ingData}
                // onChange={setSelectedDiet}
                placeholder={'Choose your ingredients...'}
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    borderColor: state.isFocused ? '#ff8600' : '#ff8600',
                    borderWidth: '2px',
                    borderRadius: '8px',
                    // This line disable the blue border
                    boxShadow: state.isFocused ? 0 : 0,
                    '&:hover': {
                      borderColor: '#ff8600',
                      outline: 'none'
                    }
                  })
                }}
              />

              <div className={styles.btnContainer}>
                <Button2
                  type={'submit'}
                  options={'Search'}
                  fn={() => ''}
                  icon={<i className="fa-solid fa-magnifying-glass"></i>}
                />
              </div>
            </div>
          </form>
        </div>
        <div>
          {firstTime ? (
            <div className={styles.first_Time}>
              <img src="src/images/TypeE.svg" alt="" />
              <h2>
                Choose the ingredient and we will found the suitable recipe for
                you
              </h2>
            </div>
          ) : (
            <>
              {data.length === 0 ? (
                <div className={styles.noResultsFound}>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbnTCjL_7-pIzDQg2W30Vy1wdTNuy8zYAP8A&usqp=CAU"
                    alt=""
                  />
                  <h2>Can&#8217;t find a recipe? </h2>
                  <div>
                    <p>
                      Be the first and share your own. Join the fun and help
                      your fellow cooks!
                    </p>
                  </div>
                  <Button2
                    icon={<i className={'fa-solid fa-pen-to-square'}></i>}
                    options={'Add recipe'}
                  />
                </div>
              ) : (
                <div>
                  {/*  <Link
              to={`/collection/${props.collection.collection_id}`}
              key={props.collection.collection_id}
              className={`${styles.collectionContainer} ${styles.boxShadowPurple}`}
            > */}
                  <div className={styles.cardContainer}>
                    {data.slice(0, itemsToRender).map(item => (
                      <Link
                        to={`/recipe/${item.name}/${item.recipe_id}`}
                        key={item.recipe_id}
                      >
                        <Suspense
                          fallback={
                            <div className={styles.cardLazyLoading}></div>
                          }
                        >
                          <Card
                            image={item.image_link}
                            title={item.name}
                            description={item.description}
                            id={item.recipe_id}
                          />
                        </Suspense>
                      </Link>
                    ))}
                    <div keyword="place_holder"></div>
                  </div>

                  {data.length > itemsToRender && (
                    <div className={styles.loadMore}>
                      <AutoClickButton
                        fn={() => setItemsToRender(itemsToRender + perLoad)}
                      />
                    </div>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}

// export default withoutAuth(Refrigerator)
export default Refrigerator
