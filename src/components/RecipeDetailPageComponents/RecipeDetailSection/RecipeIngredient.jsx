import RenderLabel from './RenderLabel'
import RenderDetail from './RenderDetail'
import styles from '../../../styles/RecipeDetailPage/DetailRecipePage.module.css'
import axios from 'axios'
import doneIcon from '../../../images/Nom nom icons/Done.png'
import { useState, useEffect } from 'react'
import { FetchIngAndNutri } from '../../Fetch/Recipes/FetchIngAndNutri'

const RecipeIngredient = props => {
  // const label = labelProps.map((ele) => RenderLabel(ele))

  // const FetchData = async () => {
  //   try {
  //     const response = await axios.get(
  //       `http://localhost:3000/recipe/nutritions/total-nutrition-facts/1`
  //     )
  //     const data = response.data.ingredientFactsOfRecipe
  //     console.log(data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // useEffect(() => {
  //   FetchData()
  // }, [])

  // let config = {
  //   method: 'post',
  //   // url: `http://localhost:3000/recipe/get-ingredients-by-recipe/${props.id}`,
  //   url: `http://localhost:3000/recipe/nutritions/total-ing-nutrition-facts/${props.id}`,
  //   data: {
  //     servingNum: props.servingNum
  //   }
  // }

  // let configNutrition = {
  //   method: 'post',
  //   url: `http://localhost:3000/recipe/nutritions/total-nutrition-facts/${props.id}`,
  //   data: {
  //     servingNum: props.servingNum
  //   }
  // }

  // console.log(typeof config.data)

  // console.log(axios.request(config)

  // const [ingredients, setIngredients] = useState([])
  // const [nutritions, setNutritions] = useState([])

  // useEffect(() => {
  //   axios
  //     .all([axios.request(config), axios.request(configNutrition)])
  //     .then(
  //       axios.spread((response1, response2) => {
  //         // handle both responses here
  //         setIngredients(response1.data.ingredientFactsOfRecipe)
  //         setNutritions(response2.data.ingredientFactsOfRecipe[0])
  //         // console.log(response1.data.ingredientFactsOfRecipe)
  //         // console.log(response2.data.ingredientFactsOfRecipe[0])
  //       })
  //     )
  //     .catch(error => console.log(error))
  // }, [])

  const { ingredients, nutritions } = FetchIngAndNutri(
    props.id,
    props.servingNum
  )

  // let nutritionToArr = Object.entries(props.nutritions)
  let nutritionToArr = Object.entries(nutritions)

  for (let i = 0; i < nutritionToArr.length; i++) {
    if (nutritionToArr[i][0].includes('_')) {
      nutritionToArr[i][0] = nutritionToArr[i][0].replace('_', ' ')
    }
  }

  // const label = props.ingredients.map(ele => (
  const label = ingredients.map(ele => (
    <div key={ele.id} className={styles.label}>
      {ele.ing_name}
    </div>
  ))

  // const labelDetail = props.ingredients.map(ele => (
  const labelDetail = ingredients.map(ele => (
    <div key={ele.id} className={`${styles.eleContainer} ${styles.flexRow}`}>
      <img src={doneIcon} />
      <div>{ele.ing_name}</div>
      <div>{ele.quantity}</div>
      <div>{ele.unit_name}</div>
    </div>
  ))

  const nutrition = nutritionToArr.map(ele => (
    <div key={ele.id} className={`${styles.eleContainer} ${styles.flexRow}`}>
      <img src={doneIcon} />
      <div>{ele[0]}</div>
      <div>{ele[1]}</div>
      {/* <div>{ele.unit_name}</div> */}
    </div>
  ))

  // const label = props.recipe.ingredients.map(ele => RenderLabel(ele))
  // const labelDetail = props.recipe.ingredients.map(ele => RenderDetail(ele))

  return (
    <div className={`${styles.ingredientContainer} ${styles.flexRow} `}>
      <div className={`${styles.ingredientTab} ${styles.boxShadowPurple}`}>
        <div className={styles.labelContainer}>{label}</div>
        <div className={styles.ingDetailContainer}>{labelDetail}</div>
      </div>

      <div className={`${styles.ingredientTab} ${styles.boxShadowPurple}`}>
        <div className={styles.title}>Nutrition facts</div>
        {/* <div className={styles.ingDetailContainer}>{nutritionFacts}</div> */}

        <div className={styles.ingDetailContainer}> {nutrition}</div>
      </div>
    </div>
  )
}

export default RecipeIngredient
