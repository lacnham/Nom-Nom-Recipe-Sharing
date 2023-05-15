import styles from '../../../styles/UserProfile/UserProfileMainPage.module.css'
import Collections from '../UserProfileCollection/Collections'
import img from '../../../images/recipeImage.png'
import { FetchCurrentuser } from '../../FetchCurrentUser'
import { Suspense, lazy, useEffect, useState } from 'react'
import axios from 'axios'

export const RecipeSection = props => {
  const collection = {
    title: 'tet',
    description: 'lorem',
    img: img
  }

  // const userData = FetchCurrentuser()
  // console.log('user data ' + userData.user.id)

  // const userID = userData.user.id
  let config = {
    method: 'get',
    url: `http://localhost:3000/recipe/user/1`,
    headers: {
      Authorization: localStorage.accessToken
    }
  }
  const [recipes, setRecipes] = useState([])
  useEffect(() => {
    axios
      .request(config)
      .then(res => setRecipes(res.data))
      .catch(error => console.log(error))
  }, [])

  const Card = lazy(() => import('../../Card'))

  const recipe = recipes.map(ele => (
    <div key={ele.recipe_id}>
      <Card
        image={ele.image_link}
        title={ele.name}
        category={['asd', 'asd1', 'asd2']}
        location="Downtown, Seattle WA"
        description={ele.description}
      />
    </div>
  ))

  return (
    <div
      className={`${styles.collectionMainContainer} ${styles.flexRow}`}
      style={{ display: `${props.display.recipe}` }}
      // style={{ display: `none` }}
    >
      {/* <Collections collection={collection}></Collections>
      <Collections collection={collection}></Collections>
      <Collections collection={collection}></Collections>
      <Collections collection={collection}></Collections> */}
      <Suspense>{recipe}</Suspense>
    </div>
  )
}
