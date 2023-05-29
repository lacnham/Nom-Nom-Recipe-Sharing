import { Suspense, lazy } from 'react'
import styles from '../../../styles/UserProfile/UserProfleCollection/CollectionRecipe.module.css'
import { FetchCollectionRecipe } from './FetchCollectionRecipe'
import { Link } from 'react-router-dom'

export const RecipesInCollection = props => {
  const recipes = FetchCollectionRecipe(props.id)

  if (!recipes) {
    return <div>Loading...</div>
  }

  const Card = lazy(() => import('../../Card'))

  const recipe = recipes.map(ele => (
    <Link to={`/recipe/${ele.name}/${ele.recipe_id}`} key={ele.recipe_id}>
      <Suspense fallback={<div className={styles.cardLazyLoading}></div>}>
        <Card
          recipe_id={ele.recipe_id}
          image={ele.image_link}
          title={ele.name}
          description={ele.description}
        />
      </Suspense>
    </Link>
  ))

  return (
    <div className={`${styles.collectionBody}`}>
      <Suspense>{recipe}</Suspense>
    </div>
  )
}
