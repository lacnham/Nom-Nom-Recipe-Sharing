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

  let nutritionToArr = Object.entries(nutritions)

  for (let i = 0; i < nutritionToArr.length; i++) {
    if (nutritionToArr[i][0].includes('_')) {
      nutritionToArr[i][0] = nutritionToArr[i][0].replace('_', ' ')
    }
  }

  const label = ingredients
    ? ingredients.map(ele => (
        <div key={ele.id} className={styles.label}>
          {ele.ing_name}
        </div>
      ))
    : null

  const labelDetail = ingredients
    ? ingredients.map(ele => (
        <div
          key={ele.id}
          className={`${styles.eleContainer} ${styles.flexRow}`}
        >
          <i class="fa-solid fa-check"></i>
          <div>{ele.ing_name}</div>
          <div>{ele.quantity}</div>
          <div>{ele.unit_name}</div>
        </div>
      ))
    : null

  const nutrition = nutritionToArr.map((ele, index) => (
    <div key={index} className={`${styles.eleContainer} ${styles.flexRow}`}>
      <i class="fa-solid fa-check"></i>
      <div>{ele[0]}</div>
      <div>{Math.round(ele[1] * 100) / 100}</div>
    </div>
  ))

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
        <div
          className={`${styles.ingDetailContainer} ${styles.nutritionDetail}`}
        >
          {nutrition}
        </div>
      </div>
    </div>
  )
}

export default RecipeIngredient
