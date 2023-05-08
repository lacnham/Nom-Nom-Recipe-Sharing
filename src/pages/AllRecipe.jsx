import React, { useState, useEffect, useMemo, lazy, Suspense } from 'react'
import axios from 'axios'
import Header from '../components/Header'
import styles from '../styles/AllRecipePage/AllRecipe.module.css'
import SearchBar from '../components/SearchBar'
import { withoutAuth } from '../components/SessionVerification/AuthChecking'
import { Button2 } from '../components/Button'
import AutoClickButton from '../components/AutoClickButton'
const AllRecipe = () => {
  const perLoad = 12
  const [searchInput, setSearchInput] = useState('')
  const [data, setData] = useState([])
  const [diet, setDiet] = useState([])
  const [country, setCountry] = useState([])

  const [itemsToRender, setItemsToRender] = useState(0)

  const filteredData = useMemo(() => {
    return data.filter(item =>
      item.name.toLowerCase().includes(searchInput.toLowerCase())
    )
  }, [data, searchInput])

  const fetchRecipes = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/recipe`)
      setData(response.data)
    } catch (error) {
      console.log(error)
      setData([])
    }
  }

  const fetchDietaty = async () => {
    try {
      const response = await axios.get('http://localhost:3000/dietary/get-all')
      setDiet(response.data)
    } catch (error) {
      console.log(error)
      setDiet([])
    }
  }

  const fetchCountry = async () => {
    try {
      const response = await axios.get('http://localhost:3000/country/get-all')
      setCountry(response.data)
    } catch (error) {
      console.log(error)
      setCountry([])
    }
  }

  useEffect(() => {
    fetchRecipes()
    fetchCountry()
    fetchDietaty()
  }, [])

  useEffect(() => {
    console.log('sessionStorage: ', sessionStorage.getItem('recipe'))
  })

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

    observer.observe(document.querySelector('#bottom'))

    return () => observer.disconnect()
  }, [])

  const Card = lazy(() => import('../components/Card'))

  return (
    <div className={styles.page} id="bottom">
      <Header />
      <div className={styles.card}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.text}>
              <h1>Hello</h1>
              <SearchBar data={data} diet={diet} country={country}></SearchBar>
              <input
                autoFocus
                placeholder="Type..."
                type="text"
                value={searchInput}
                onChange={e => setSearchInput(e.target.value)}
              />
              {filteredData.length === 0 ? (
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
                    icon={<i className={'fa-solid fa-utensils'}></i>}
                    options={'Add recipe'}
                  />
                </div>
              ) : (
                <div>
                  <div className={styles.cardContainer}>
                    {filteredData.slice(0, itemsToRender).map(item => (
                      <div key={item.recipe_id}>
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
                      </div>
                    ))}
                    <div keyword="place_holder"></div>
                  </div>

                  {filteredData.length > itemsToRender && (
                    <div className={styles.loadMore}>
                      <AutoClickButton
                        fn={() => setItemsToRender(itemsToRender + perLoad)}
                      />
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withoutAuth(AllRecipe)
