import styles from '../../../styles/UserProfile/UserProfileMainPage.module.css'
import Collections from '../UserProfileCollection/Collections'
import img from '../../../images/recipeImage.png'
import { FetchCurrentuser } from '../../FetchCurrentUser'
import { Suspense, lazy, useEffect, useState } from 'react'
import axios from 'axios'
import { DefaultButton } from '../../Button'
import { Link, useNavigate } from 'react-router-dom'

export const RecipeSection = props => {
  const collection = {
    title: 'tet',
    description: 'lorem',
    img: img
  }

  const style = {
    backgroundColor: 'var(--light-orange)',
    color: 'var(--black-purple)',
    backgroundColorHover: 'white',
    colorHover: 'var(--black-purple)'
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
    <Card
      image={ele.image_link}
      title={ele.name}
      category={['asd', 'asd1', 'asd2']}
      location="Downtown, Seattle WA"
      description={ele.description}
    />
  ))

  const navigate = useNavigate()

  const handleCreateNewRecipe = () => {
    navigate(`/publishRecipe`)
  }

  return (
    <div
      className={`${styles.collectionMainContainer} ${styles.flexRow}`}
      style={{ display: `${props.display.recipe}` }}
      // style={{ display: `none` }}
    >
      <div className={`${styles.createNewContainer} ${styles.flexColumn}`}>
        <DefaultButton
          options={'Create new recipe'}
          style={style}
          className={`${styles.createNewButton}`}
          fn={handleCreateNewRecipe}
        />
      </div>
      {/* <Collections collection={collection}></Collections>
      <Collections collection={collection}></Collections>
      <Collections collection={collection}></Collections>
      <Collections collection={collection}></Collections> */}

      <div className={`${styles.collectionMainContainer} ${styles.flexRow}`}>
        <Suspense>{recipe}</Suspense>
      </div>
    </div>
  )
}
