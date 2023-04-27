import axios from 'axios'
import { useEffect, useState } from 'react'

export const FetchCollectionRecipe = id => {
  let config = {
    method: 'get',
    url: `http://localhost:3000/collection/${id}/recipes`,
    headers: {
      Authorization: localStorage.accessToken
    }
  }
  const [recipes, setRecipes] = useState()

  useEffect(() => {
    axios
      .request(config)
      .then(res => setRecipes(res.data))
      .catch(error => console.log(error))
  }, [])
  return recipes
}
