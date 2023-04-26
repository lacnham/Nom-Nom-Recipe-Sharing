import { useEffect, useState } from 'react'
import styles from '../../../../styles/UserProfile/UserProfleCollection/CollectionDropList.module.css'
import axios from 'axios'
// import { AddRecipeToCollection } from './AddRecipeToCollection'

export const CollectionInDropList = props => {
  const [message, setMessage] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)

  const handleAddRecipe = async () => {
    let config = {
      method: 'post',
      url: 'http://localhost:3000/collection/add-recipe',
      headers: {
        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjgyMzAxNzA1LCJleHAiOjE2ODIzNDQ5MDV9.idJQTXPgC8Uxb57EvDEqeQPY1IQ4OJqurlLQBXIddms'
      },
      data: {
        collection_id: props.collection.collection_id,
        recipe_id: props.recipe.recipe_id
      }
    }
    try {
      const res = await axios.request(config)
      setMessage(res.data.message)
      setIsSuccess(true)
    } catch (error) {
      console.log(error)
    }
    console.log(props.collection.collection_id)
    console.log(props.recipe.recipe_id)
    console.log(message)
  }

  return (
    <div
      className={`${styles.item}`}
      id={props.collection.id}
      onClick={handleAddRecipe}
    >
      {props.collection.name}
    </div>
  )
}
