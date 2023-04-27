import axios from 'axios'
import { useState } from 'react'

export default function EnterToSubmit (value, setValue) {
  const handleSubmit = e => {
    e.preventDefault()
    console.log('Submitted', value)
  }

  const handleInputChange = setValue => {
    setValue(e.target.value)
  }

  const handleKeyDown = value => {
    if (e.key === 'Enter') {
      handleSubmit(e, value)
    }
  }

  // let config = {
  //     method: 'post',
  //     url: 'http://localhost:3000/collection',
  //     headers: {
  //         Authorization: localStorage.accessToken
  //     },
  //     data: {
  //         name: props.name,
  //         note: '',
  //         recipeIds: props.recipe.recipe_id
  //     }
  // }

  // const [message, setMessage] =  useState('');

  //  const handleCreate = async (e) => {
  //         // console.log('Access token ' + localStorage.accesstoken)
  //         try {
  //           const res = await axios.request(config)
  //           setMessage(res.data.message)
  //           console.log(res.data)
  //           setIsSuccess(true)
  //         } catch (error) {
  //           console.log(error)
  //         }
  //  }
}

// export { handleInputChange, handleKeyDown }
