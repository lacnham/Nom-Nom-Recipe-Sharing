import styles from '../../../styles/UserProfile/UserProfleCollection/CollectionRecipe.module.css'
import Header from '../../Header'
import Collections from './Collections'
import img from '../../../images/recipeImage.png'

export const CollectionRecipes = props => {
  const collection = {
    title: 'tet',
    description: 'lorem',
    img: img
  }
  return (
    <>
      <Header />
      <div
        className={`${styles.collectionRecipeMainContainer} ${styles.flexColumn}`}
      >
        <div className={`${styles.collectionHeader} ${styles.flexColumn}`}>
          <div className={`${styles.blurredBackground} `}>
            <div className={`${styles.collectionTitle}`}>
              {/* {props.collection.name} */}
              asdasdasd
            </div>
            <div className={`${styles.collectionNote}`}>
              {/* {props.collection.note} */}
              asdasd
            </div>
          </div>
        </div>
        <div className={`${styles.collectionBody}`}>
          <Collections collection={collection} />
          <Collections collection={collection} />
          <Collections collection={collection} />
          <Collections collection={collection} />
          <Collections collection={collection} />
          <Collections collection={collection} />
          {/* <Collections collection={collection} />
          <Collections collection={collection} />
          <Collections collection={collection} />
          <Collections collection={collection} /> */}
        </div>
      </div>
    </>
  )
}
