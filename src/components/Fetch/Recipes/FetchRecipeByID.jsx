import { useState, useEffect } from 'react'
import axios from 'axios'

export const FetchRecipeByID = id => {
  const [recipe, setRecipe] = useState()
  // const [ingredients, setIngredients] = useState([])
  // const [nutritions, setNutritions] = useState([])
  // const [servingNum, setServingNum] = useState('')
  // const [isLoading, setIsLoading] = useState(true)
  // const [ingredients, setIngredients] = useState([])

  // const [nutritions, setNutritions] = useState([])

  let configRecipe = {
    method: 'GET',
    url: `http://localhost:3000/recipe/${id}`
  }

  const fetchRecipe = async () => {
    try {
      const res = await axios.request(configRecipe)
      setRecipe(res.data)
      setServingNum(res.data.serving_size)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchRecipe()
  }, [])

  // console.log(recipe)
  // if (isLoading) {
  //   return <div>Loading....</div>
  // }

  // const [ingredients, setIngredients] = useState([])
  // const [nutritions, setNutritions] = useState([])

  // let configIng = {
  //   method: 'post',
  //   url: `http://localhost:3000/recipe/nutritions/total-ing-nutrition-facts/${id}`,
  //   data: {
  //     servingNum: `${6}`
  //   }
  // }

  // let configNutrition = {
  //   method: 'post',
  //   url: `http://localhost:3000/recipe/nutritions/total-nutrition-facts/${id}`,
  //   data: {
  //     servingNum: `${6}`
  //   }
  // }

  // useEffect(() => {
  //   axios.all([axios.request(configIng), axios.request(configNutrition)]).then(
  //     axios.spread((resIng, resNutri) => {
  //       console.log('ing ', resIng, 'Nug ', resNutri)
  //       setIngredients(resIng && resIng.data.ingredientFactsOfRecipe)
  //       setNutritions(resNutri && resNutri.data.ingredientFactsOfRecipe[0])
  //     })
  //   )
  // }, [])

  // if (!servingNum) {
  //   return recipe

  // console.log(typeof parseInt(recipe.serving_size), ' ', serving_size)
  // }

  // return { recipe, ingredients, nutritions }
  return { recipe }
}
