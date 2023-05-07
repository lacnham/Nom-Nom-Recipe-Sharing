import RecipeIntro from './RecipeIntro'
import RecipeIngredient from './RecipeIngredient'
import RecipeDescription from './RecipeDescription'
import styles from '../../../styles/RecipeDetailPage/DetailRecipePage.module.css'
import image from '../../../images/recipeImage.png'
import axios from 'axios'
import { useEffect, useState } from 'react'

const RecipeDetail = props => {
  // const duration = Object.entries(props.recipe.duration)

  if (!props.recipe) {
    return <div>Loading data....</div>
  }

  let duration = Object.entries(props.recipe.duration).map(
    ([key, val] = entry) => {
      return `${val} ${key}`
    }
  )

  const recipe = {
    id: props.id,
    title: props.recipe.name,
    img: image,
    commonInfo: {
      duration: duration,
      serving: `${parseInt(props.recipe.serving_size)} people`,
      // calories: `${props.nutritions.calories}`,
      dietType: ''
    },
    origin: 'france',
    description: props.recipe.description
  }

  return (
    <div className={`${styles.recipePrimaryContainer} ${styles.flexColumn}`}>
      <RecipeIntro recipe={recipe} />
      <RecipeDescription
        recipe={recipe}
        id={props.id}
        // nutritions={props.nutritions}
      />
      <RecipeIngredient
        recipe={recipe}
        servingNum={props.recipe.serving_size}
        id={props.id}
        // ingredients={props.ingredients}
        // nutritions={props.nutritions}
      />
    </div>
  )
}

export default RecipeDetail
