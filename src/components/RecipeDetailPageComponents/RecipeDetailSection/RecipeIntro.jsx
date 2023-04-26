import styles from '../../../styles/RecipeDetailPage/DetailRecipePage.module.css'

import timeIcon from '../../../images/Nom nom icons/Time_atack.png'
import peopleIcon from '../../../images/Nom nom icons/User_alt_fill.png'

const RecipeIntro = props => {
  if (props.recipe.commonInfo.dietType == '') {
    props.recipe.commonInfo.dietType = 'none'
  }

  return (
    <div
      className={`${styles.recipePrimaryContainer} ${styles.boxShadowPurple}`}
    >
      <img className={styles.recipeImg} src={props.recipe.img} />
      <div className={styles.title}>{props.recipe.title}</div>
      <div className={styles.commonInfo}>
        <div className={`${styles.commonInfoEle} ${styles.flexRow}`}>
          <img src={timeIcon} alt="duration icon" />
          <div>{props.recipe.commonInfo.duration}</div>
        </div>
        <div className={`${styles.commonInfoEle} ${styles.flexRow}`}>
          <img src={peopleIcon} alt="people icon" />
          <div>{props.recipe.commonInfo.serving}</div>
        </div>
        <div className={`${styles.commonInfoEle} ${styles.flexRow}`}>
          <div>
            <b>Calories</b>: {props.recipe.commonInfo.calories}
          </div>
        </div>
        <div className={`${styles.commonInfoEle} ${styles.flexRow}`}>
          <div>
            <b>Diet type</b>: {props.recipe.commonInfo.dietType}
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecipeIntro
