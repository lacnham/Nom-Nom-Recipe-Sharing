import axios from 'axios'
import { useEffect, useState } from 'react'

export const FetchCollectionWithID = id => {
  let config = {
    method: 'get',
    url: `http://localhost:3000/collection/${id}`,
    headers: {
      Authorization: localStorage.accesstoken
    }
  }

  const [collectionData, setCollectionData] = useState()

  useEffect(() => {
    axios
      .request(config)
      .then(res => setCollectionData(res.data))
      .catch(error => console.log(error))
  }, [])

  return collectionData
}
