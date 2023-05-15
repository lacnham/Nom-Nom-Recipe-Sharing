import { useState } from 'react'

export const FetchRecipeWithName = name => {
  let config = {
    method: 'get',
    url: `http://localhost:3000/recipe/name/${name}`
  }

  const [recipe, setRecipe] = useState([])

  // useFe
}
