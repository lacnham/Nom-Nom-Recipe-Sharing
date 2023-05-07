import Header from '../components/Header'
import styles from '../styles/RecipeDetailPage/DetailRecipePage.module.css'
import RecipeDetail from '../components/RecipeDetailPageComponents/RecipeDetailSection/RecipeDetail'
import RecipeReview from '../components/RecipeDetailPageComponents/RecipeReviewSection/RecipeReview'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { FetchRecipeByID } from '../components/Fetch/Recipes/FetchRecipeByID'
import { useParams } from 'react-router-dom'
import { FetchIngAndNutri } from '../components/Fetch/Recipes/FetchIngAndNutri'
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

  // const recipe = FetchRecipeByID(id)

  // const { recipe, ingredients, nutritions } = FetchRecipeByID(id)
  const { recipe } = FetchRecipeByID(id)
  // const [ingredients, setIngredients] = useState([])
  // const [nutritions, setNutritions] = useState([])

  // if (!recipe) {
  //   return <div>Loading data...</div>
  // }

  // let configIng = {
  //   method: 'post',
  //   url: `http://localhost:3000/recipe/nutritions/total-ing-nutrition-facts/${id}`,
  //   data: {
  //     servingNum: `${recipe.serving_num}`
  //   }
  // }

  // let configNutrition = {
  //   method: 'post',
  //   url: `http://localhost:3000/recipe/nutritions/total-nutrition-facts/${id}`,
  //   data: {
  //     servingNum: `${recipe.serving_num}`
  //   }
  // }

  // useEffect(() => {
  //   axios.all([axios.request(configIng), axios.request(configNutrition)]).then(
  //     axios.spread((resIng, resNutri) => {
  //       console.log('ing ', resIng, 'Nug ', resNutri)
  //       setIngredients(resIng && resIng.data.ingredientFactsOfRecipe)
  //       setNutritions(resNutri && resNutri.data.ingredientFactsOfRecipe[0])
  //     })
  //   )
  // }, [])

  return (
    <>
      {/* TODO CSS clashes with PublicRecipe.module.css page [FIX] */}
      <Header />
      <div className={`${styles.body}`}>
        <div className={`${styles.mainContainer} ${styles.flexRow}`}>
          <RecipeDetail
            id={id}
            recipe={recipe}
            // ingredients={ingredients}
            // nutritions={nutritions}
          />
          {/* <RecipeDetail recipe={recipe} id={id} /> */}
          <RecipeReview recipe={recipe} id={id} />
        </div>
      </div>
    </>
  )
}

export default DetailRecipePage
