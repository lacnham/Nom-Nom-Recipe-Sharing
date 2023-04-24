import Header from '../components/Header'
import styles from '../styles/RecipeDetailPage/DetailRecipePage.module.css'
import RecipeDetail from '../components/RecipeDetailPageComponents/RecipeDetailSection/RecipeDetail'
import RecipeReview from '../components/RecipeDetailPageComponents/RecipeReviewSection/RecipeReview'

const DetailRecipePage = () => {
  return (
    <>
    {/* TODO CSS clashes with PublicRecipe.module.css page [FIX] */}
      <Header />
      <div className={`${styles.body}`}>
        <div className={`${styles.mainContainer} ${styles.flexRow}`}>
          <RecipeDetail />
          <RecipeReview />
        </div>
      </div>
    </>
  )
}

export default DetailRecipePage
