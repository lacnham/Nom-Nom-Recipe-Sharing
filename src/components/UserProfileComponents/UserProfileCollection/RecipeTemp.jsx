import styles from '../../../styles/UserProfile/UserProfileMainPage.module.css'

import { Suspense, lazy } from 'react'
// import styles from '../../../styles/UserProfile/UserProfleCollection/CollectionRecipe.module.css'
import { FetchCollectionRecipe } from './FetchCollectionRecipe'

export const RecipeTemp = () => {
  const recipes = FetchCollectionRecipe(props.id)

  if (!recipes) {
    return <div>Loading...</div>
  }

  // console.log(recipes)

  const Card = lazy(() => import('../../Card'))

  const recipe = recipes.map(ele => (
    <Card
      key={ele.recipe_id}
      image={ele.image_link}
      title={ele.name}
      category={['asd', 'asd1', 'asd2']}
      location="Downtown, Seattle WA"
      description={ele.description}
    />
  ))

  return (
    <div className={`${styles.collectionMainContainer}`}>
      <Suspense>
        {/* <Card
          image={item.image_link}
          title={item.name}
          category={['asd', 'asd1', 'asd2']}
          location="Downtown, Seattle WA"
          description={item.description}
        /> */}
        {recipe}
      </Suspense>
    </div>
  )
}
