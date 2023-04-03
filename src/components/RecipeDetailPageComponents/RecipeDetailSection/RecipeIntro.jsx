
import styles from '../../../styles/RecipeDetailPage/DetailRecipePage.module.css'

import image from '../../../images/recipeImage.png'
import timeIcon from '../../../images/Nom nom icons/Time_atack.png'
import peopleIcon from '../../../images/Nom nom icons/User_alt_fill.png'

const RecipeIntro = () => {
    const recipe = {
      title: '',
      src: image
    }
  
    return (
      <div className={`${styles.recipePrimaryContainer} ${styles.boxShadowPurple}`}>
        <img className={styles.recipeImg} src={recipe.src} />
        <div className={styles.title}>Beef steak</div>
        <div className={styles.commonInfo}>
          <div className={`${styles.commonInfoEle} ${styles.flexRow}`}>
            <img src={timeIcon} alt="duration icon" />
            <div>40 minutes</div>
          </div>
          <div className={`${styles.commonInfoEle} ${styles.flexRow}`}>
            <img src={peopleIcon} alt="people icon" />
            <div>1 people</div>
          </div>
          <div className={`${styles.commonInfoEle} ${styles.flexRow}`}>
            {/* <img src={peopleIcon} alt="people icon" /> */}
            <div><b>Calories</b>: 600 kcal</div>
          </div>
          <div className={`${styles.commonInfoEle} ${styles.flexRow}`}>
            {/* <img src={peopleIcon} alt="people icon" /> */}
            <div><b>Diet type:</b> none</div>
          </div>
        </div>
      </div>
    )
}

export default RecipeIntro;