import RecipeIntro from "./RecipeIntro";
import RecipeIngredient from "./RecipeIngredient";
import RecipeDescription from "./RecipeDescription";
import styles from '../../../styles/RecipeDetailPage/DetailRecipePage.module.css'


const RecipeDetail = () => {
    return (
      <div className={`${styles.recipeDetail} ${styles.flexColumn}`}>
        <RecipeIntro />
        <RecipeDescription />
        <RecipeIngredient />
      </div>
    )
  }

  export default RecipeDetail;