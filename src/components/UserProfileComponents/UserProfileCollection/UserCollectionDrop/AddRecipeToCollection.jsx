import { useState, useEffect } from 'react'
import axios from 'axios'

// export const AddRecipeToCollection = props => {
//   const [message, setMessage] = useState('')

//   let config = {
//     method: 'post',
//     url: 'http://localhost:3000/collection/add-recipe',
//     headers: {
//       Authorization:
//         'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjgyMTQwNDUwLCJleHAiOjE2ODIxODM2NTB9.vj0eauSuG_QdyM2L94R1jqr9LeWxWmHe9Zmi_InUq84'
//     },
//     body: {
//       collection_id: `${props.collection.collection_id}`,
//       recipe_id: `${props.recipe.recipe_id}`
//     }
//   }

//   useEffect(() => {
//     axios
//       .request(config)
//       .then(res => setMessage(res.message))
//       .catch(err => console.log(err))
//   })

//   return message
// }
