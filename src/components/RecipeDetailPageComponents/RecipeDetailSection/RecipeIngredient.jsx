import RenderLabel from './RenderLabel'
import RenderDetail from './RenderDetail'
import styles from '../../../styles/RecipeDetailPage/DetailRecipePage.module.css'
import axios from 'axios'
import doneIcon from '../../../images/Nom nom icons/Done.png'
import { useState, useEffect } from 'react'

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

  let config = {
    method: 'get',
    // url: `http://localhost:3000/recipe/get-ingredients-by-recipe/${props.id}`,
    url: `http://localhost:3000/recipe/nutritions/total-nutrition-facts/${props.i}`,
    data: {
      servingNum: 1.0
    }
  }

  // console.log(typeof config.data)

  // console.log(axios.request(config)

  const [ingredients, setIngredients] = useState([])

  useEffect(() => {
    axios
      .request(config)
      .then(res => setIngredients(res.data.ingredientFactsOfRecipe))
      .catch(error => console.log(error))
  }, [])

  // console.log('serving num' + props.servingNum)
  console.log(ingredients[0])
  // const ingToArr = Object.entries(ingredients[0])

  // let nutritions = []
  // let count = 0
  // for (let i = 0; i < ingredients.length; i++) {
  //   let ingToArr = Object.entries(ingredients[i])
  //   for (let j = 4; j < ingToArr.length; j++) {
  //     if (ingToArr[j][0] == nutritions[count][0]) {
  //       nutritions[count][1] =
  //         parseFloat(nutritions[count][1]) + parseFloat(ingToArr[j][i])
  //     }
  //     nutritions.push(ingToArr[j])
  //     count++
  //   }
  // }

  // console.log(nutritions)

  // const nutritions = []
  // for (let i = 4; i < ingToArr.length; i++) {
  //   nutritions.push(ingToArr[i])
  // }
  // console.log(nutritions)
  // console.log(Object.entries(ingredients))

  // const nutritionFacts = props.recipe.ingredients.map((ele) =>
  //   ele.nutritions[0].name
  // )

  const label = ingredients.map(ele => (
    <div key={ele.id} className={styles.label}>
      {ele.ing_name}
    </div>
  ))

  const labelDetail = ingredients.map(ele => (
    <div key={ele.id} className={`${styles.eleContainer} ${styles.flexRow}`}>
      <img src={doneIcon} />
      <div>{ele.ing_name}</div>
      <div>{ele.quantity}</div>
      <div>{ele.unit_name}</div>
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
      </div>
    </div>
  )
}

export default RecipeIngredient
