import styles from '../../../styles/UserProfile/UserProfleCollection/CollectionRecipe.module.css'
import Header from '../../Header'
import Collections from './Collections'
import img from '../../../images/recipeImage.png'
import { FetchCollectionWithID } from './FetchCollectionWithID'
import { useParams } from 'react-router-dom'
import { FetchCollectionRecipe } from './FetchCollectionRecipe'
import { RecipesInCollection } from './RecipesInCollection'

export const CollectionRecipes = props => {
  const { id } = useParams()

  const collection = FetchCollectionWithID(id)

  if (!collection) {
    return <div> Loading...</div>
  }

  return (
    <>
      <Header />
      <div
        className={`${styles.collectionRecipeMainContainer} ${styles.flexColumn}`}
      >
        <div className={`${styles.collectionHeader} ${styles.flexColumn}`}>
          <div className={`${styles.blurredBackground} `}>
            <div className={`${styles.collectionTitle}`}>{collection.name}</div>
            <div className={`${styles.collectionNote}`}>{collection.note}</div>
          </div>
        </div>
        {/* <div className={`${styles.collectionBody}`}> */}
        <RecipesInCollection id={id} />
        {/* <Collections collection={collection} />
          <Collections collection={collection} />
          <Collections collection={collection} />
          <Collections collection={collection} />
          <Collections collection={collection} />
          <Collections collection={collection} /> */}
        {/* <Collections collection={collection} />
          <Collections collection={collection} />
          <Collections collection={collection} />
          <Collections collection={collection} /> */}
        {/* </div> */}
      </div>
    </>
  )
}
