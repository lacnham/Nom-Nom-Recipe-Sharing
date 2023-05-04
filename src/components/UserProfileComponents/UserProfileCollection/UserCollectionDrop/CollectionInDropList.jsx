import { useEffect, useState } from 'react'
import styles from '../../../../styles/UserProfile/UserProfleCollection/CollectionDropList.module.css'
import axios from 'axios'
// import { AddRecipeToCollection } from './AddRecipeToCollection'

export const CollectionInDropList = props => {
  const [message, setMessage] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)

  const handleBlur = () => {
    let newStyle
    if (props.current == props.style.change) {
      newStyle = props.style.default
      console.log(2)
    }
    props.setCurrent(newStyle)
  }

  let config = {
    method: 'post',
    url: 'http://localhost:3000/collection/add-recipe',
    headers: {
      // 'Content-Type': 'application/json',
      Authorization: localStorage.accessToken
    },
    data: {
      collection_id: props.collection.collection_id,
      recipe_id: props.recipe.recipe_id
    }
  }

  const handleAddRecipe = async () => {
    // console.log('Access token ' + localStorage.accesstoken)
    try {
      const res = await axios.request(config)
      setMessage(res.data.message)
      console.log(res.data)
      setIsSuccess(true)
    } catch (error) {
      console.log(error)
    }

    if (isSuccess) {
      handleBlur()
      console.log(message)
    }

    // console.log('Collection id' + props.collection.collection_id)
    // console.log(props.recipe.recipe_id)
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
