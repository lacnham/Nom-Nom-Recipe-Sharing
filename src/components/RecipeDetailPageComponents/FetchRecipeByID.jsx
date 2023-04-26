import { useState, useEffect } from 'react'
import axios from 'axios'

export const FetchRecipeByID = id => {
  let config = {
    method: 'get',
    maxBodlength: Infinity,
    url: `http://localhost:3000/recipe/${id}`
  }

  const [data, setData] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios
      .request(config)
      .then(res => {
        setData(res && res.data)
        // console.log(data)
        setIsLoading(false)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])
  return data
}
