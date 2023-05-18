import axios from 'axios'
import { useEffect, useState } from 'react'

export const FetchAllIngAndCountry = () => {
  const [countries, setContries] = useState([])
  const [countryOptions, setCountryOptions] = useState(null)
  const [unitOptions, setUnitOptions] = useState(null)
  const [units, setUnits] = useState([])
  const [ingredients, setIngredients] = useState([])
  const [ingredientOPtion, setIngredientOption] = useState(null)
  const [diets, setDiets] = useState([])
  const [dietOptions, setDietOptions] = useState(null)

  let configCountries = {
    method: 'GET',
    url: 'http://localhost:3000/country/get-all'
  }

  let configUnits = {
    method: 'GET',
    url: 'http://localhost:3000/unit/get-all'
  }

  let configIng = {
    method: 'GET',
    url: `http://localhost:3000/ingredient/get-all`
  }

  let configDiet = {
    method: 'GET',
    url: `http://localhost:3000/dietary/get-all`
  }
  const fetch = async () => {
    try {
      const res = await axios.all([
        axios.request(configCountries),
        axios.request(configUnits),
        axios.request(configIng),
        axios.request(configDiet)
      ])

      // localStorage.setItem('countries', res[0])
      // localStorage.setItem('units', res[1])
      setContries(res[0].data)
      setUnits(res[1].data)
      setIngredients(res[2].data)
      setDiets(res[3].data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetch()
  }, [])

  const transformData = () => {
    const countriesArray = Array.from(countries, item => [item.id, item.name])
    const transformedCountryData = countriesArray.map(item => ({
      value: item[0],
      label: item[1]
    }))

    // console.log(transformedCountryData)

    const unitsArray = Array.from(units, item => item.unit_name)
    const transformUnitData = unitsArray.map(item => ({
      value: item,
      label: item
    }))

    const ingArray = Array.from(ingredients, item => [item.id, item.ing_name])
    const transformIngData = ingArray.map(item => ({
      value: item[0],
      label: item[1]
    }))

    const dietArray = Array.from(diets, item => item.name)
    const transFormedDiet = dietArray.map(item => ({
      value: item,
      label: item
    }))

    // console.log(transFormedDiet)

    setUnitOptions(transformUnitData)
    setCountryOptions(transformedCountryData)
    setIngredientOption(transformIngData)
    setDietOptions(transFormedDiet)
  }

  useEffect(() => {
    transformData()
  }, [countries, units, ingredients])

  return {
    countryOptions,
    unitOptions,
    ingredientOPtion,
    countries,
    ingredients,
    dietOptions
  }
}
