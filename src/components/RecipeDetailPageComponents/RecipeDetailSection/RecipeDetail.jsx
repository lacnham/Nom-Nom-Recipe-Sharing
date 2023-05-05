import RecipeIntro from './RecipeIntro'
import RecipeIngredient from './RecipeIngredient'
import RecipeDescription from './RecipeDescription'
import styles from '../../../styles/RecipeDetailPage/DetailRecipePage.module.css'
import image from '../../../images/recipeImage.png'
import axios from 'axios'
import { useEffect, useState } from 'react'

const RecipeDetail = props => {
  const duration = Object.entries(props.recipe.duration)

  const recipe = {
    id: props.id,
    title: props.recipe.name,
    img: image,
    commonInfo: {
      duration: `${duration[0][1]} ${duration[0][0]}`,
      serving: `${parseInt(props.recipe.serving_size)} people`,
      calories: '600 kcal',
      dietType: ''
    },
    origin: 'france',
    description: props.recipe.description,
    ingredients: [
      {
        key: 1,
        name: 'Beef',
        color: 'red',
        textColor: 'white',
        amount: '200g'
      },
      {
        key: 2,
        name: 'Pepper',
        color: 'black',
        textColor: 'white',
        amount: '1g'
      },
      {
        key: 3,
        name: 'Potato',
        color: 'Yellow',
        textColor: 'black',
        amount: '1'
      }
    ]
  }

  return (
    <div className={`${styles.recipePrimaryContainer} ${styles.flexColumn}`}>
      <RecipeIntro recipe={recipe} />
      <RecipeDescription recipe={recipe} id={props.id} />
      <RecipeIngredient
        recipe={recipe}
        id={props.id}
        servingNum={props.recipe.serving_size}
      />
    </div>
  )
}

export default RecipeDetail
