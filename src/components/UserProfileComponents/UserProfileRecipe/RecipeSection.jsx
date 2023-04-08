import styles from '../../../styles/UserProfile/UserProfileMainPage.module.css'
import Collections from '../UserProfileCollection/Collections'
import img from '../../../images/recipeImage.png'

export const RecipeSection = () => {
  const collection = {
    title: 'tet',
    description: 'lorem',
    img: img
  }

  return (
    <div className={`${styles.collectionMainContainer} ${styles.flexRow}`}>
      <Collections collection={collection}></Collections>
      <Collections collection={collection}></Collections>
      <Collections collection={collection}></Collections>
      <Collections collection={collection}></Collections>
    </div>
  )
}
