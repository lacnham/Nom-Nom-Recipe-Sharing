import axios from 'axios'
import { useEffect, useState } from 'react'

export const FetchAllIngAndCountry = () => {
  const [countries, setContries] = useState([])
  const [units, setUnits] = useState([])

  let configCountries = {
    method: 'GET',
    url: 'http://localhost:3000/country/get-all'
  }

  let configUnits = {
    method: 'GET',
    url: 'http://localhost:3000/unit/get-all'
  }

  const fetch = async () => {
    try {
      const res = await axios.all([
        axios.request(configCountries),
        axios.request(configUnits)
      ])
      setContries(res[0])
      setUnits(res[1])
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetch()
  }, [])

  return { countries, units }
}
