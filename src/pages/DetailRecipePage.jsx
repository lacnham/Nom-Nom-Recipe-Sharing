import Header from '../components/Header'
import styles from '../styles/RecipeDetailPage/DetailRecipePage.module.css'
import RecipeDetail from '../components/RecipeDetailPageComponents/RecipeDetailSection/RecipeDetail'
import RecipeReview from '../components/RecipeDetailPageComponents/RecipeReviewSection/RecipeReview'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { FetchRecipeByID } from '../components/RecipeDetailPageComponents/FetchRecipeByID'
// import { LLogin } from '../components/Login'

const DetailRecipePage = () => {
  // let config = {
  //   method: 'get',
  //   maxBodlength: Infinity,
  //   url: 'http://localhost:3000/recipe/8'
  // }

  // const [data, setData] = useState({})
  // const [isLoading, setIsLoading] = useState(true)

  // useEffect(() => {
  //   axios
  //     .request(config)
  //     .then(res => {
  //       setData(res && res.data)
  //       // console.log(data)
  //       setIsLoading(false)
  //     })
  //     .catch(error => {
  //       console.log(error)
  //     })
  // }, [])

  const recipe = FetchRecipeByID(1)
  console.log(recipe)

  // const accesstoken = LLogin()
  // console.log(accesstoken)

  return (
    <>
      {/* TODO CSS clashes with PublicRecipe.module.css page [FIX] */}
      <Header />
      <div className={`${styles.body}`}>
        <div className={`${styles.mainContainer} ${styles.flexRow}`}>
          <RecipeDetail recipe={recipe} />
          <RecipeReview recipe={recipe} />
        </div>
      </div>
    </>
  )
}

export default DetailRecipePage
