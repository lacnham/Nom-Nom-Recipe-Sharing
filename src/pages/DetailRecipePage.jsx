import Header from '../components/Header'
import styles from '../styles/RecipeDetailPage/DetailRecipePage.module.css'
import RecipeDetail from '../components/RecipeDetailPageComponents/RecipeDetailSection/RecipeDetail'
import RecipeReview from '../components/RecipeDetailPageComponents/RecipeReviewSection/RecipeReview'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { FetchRecipeByID } from '../components/Fetch/Recipes/FetchRecipeByID'
import { useParams } from 'react-router-dom'
// import { LLogin } from '../components/Login'

const DetailRecipePage = () => {
  // let config = {
  //   method: 'get',
  //   maxBodlength: Infinity,
  //   url: 'http://localhost:3000/recipe/8'
  // }

  const { id } = useParams()
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

  const recipe = FetchRecipeByID(id)

  // const recipe = Recipe(1)

  // const accesstoken = LLogin()
  // console.log(accesstoken)

  return (
    <>
      {/* TODO CSS clashes with PublicRecipe.module.css page [FIX] */}
      <Header />
      <div className={`${styles.body}`}>
        <div className={`${styles.mainContainer} ${styles.flexRow}`}>
          <RecipeDetail recipe={recipe} id={id} />
          <RecipeReview recipe={recipe} />
        </div>
      </div>
    </>
  )
}

export default DetailRecipePage
