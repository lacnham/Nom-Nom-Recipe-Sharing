import RenderLabel from './RenderLabel'
import RenderDetail from './RenderDetail'
import styles from '../../../styles/RecipeDetailPage/DetailRecipePage.module.css'
import axios from 'axios'
import doneIcon from '../../../images/Nom nom icons/Done.png'
import { useState, useEffect } from 'react'
import { FetchIngAndNutri } from '../../Fetch/Recipes/FetchIngAndNutri'

const RecipeIngredient = props => {
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
      <div>{Math.round(ele[1] * 100) / 100}</div>
      {/* <div>{ele.unit_name}</div> */}
    </div>
  ))

  // const label = props.recipe.ingredients.map(ele => RenderLabel(ele))
  // const labelDetail = props.recipe.ingredients.map(ele => RenderDetail(ele))

  return (
    <div
      className={`${styles.ingredientContainer} ${styles.flexRow}  ${styles.boxShadowPurple} `}
    >
      <div className={`${styles.ingredientTab} `}>
        <div className={styles.labelContainer}>{label}</div>
        <div className={styles.ingDetailContainer}>{labelDetail}</div>
      </div>

      <div className={`${styles.ingredientTab}`}>
        <div className={styles.title}>Nutrition facts</div>
        {/* <div className={styles.ingDetailContainer}>{nutritionFacts}</div> */}

        <div
          className={`${styles.ingDetailContainer} ${styles.nutritionDetail}`}
        >
          {/* {' '} */}
          {nutrition}
        </div>
      </div>
    </div>
  )
}

export default RecipeIngredient
