import RenderLabel from './RenderLabel'
import RenderDetail from './RenderDetail'
import styles from '../../../styles/RecipeDetailPage/DetailRecipePage.module.css'

const RecipeIngredient = props => {
  // const detailProps = [
  //   { key: 1, name: 'Beef', amount: '200g' },
  //   { key: 2, name: 'Beef', amount: '200g' },
  //   { key: 3, name: 'Beef', amount: '200g' },
  //   { key: 4, name: 'Beef', amount: '200g' },
  //   { key: 5, name: 'Beef', amount: '200g' },
  //   { key: 6, name: 'Beef', amount: '200g' },
  //   { key: 7, name: 'Beef', amount: '200g' }
  // ]

  // const labelDetail = detailProps.map(ele => RenderDetail(ele))

  // const labelProps = [
  //   { key: 1, name: 'Beef', color: 'red', textColor: 'white' },
  //   { key: 2, name: 'Pepper', color: 'black', textColor: 'white' },
  //   { key: 3, name: 'Potato', color: 'Yellow', textColor: 'black' }
  // ]

  // const label = labelProps.map((ele) => RenderLabel(ele))

  const label = props.recipe.ingredients.map(ele => RenderLabel(ele))

  // const nutritionFacts = props.recipe.ingredients.map((ele) =>
  //   ele.nutritions[0].name
  // )

  const labelDetail = props.recipe.ingredients.map(ele => RenderDetail(ele))

  // const nutrition = nutritionFacts.map((ele) => RenderDetail(ele))

  return (
    <div className={`${styles.ingredientContainer} ${styles.flexRow} `}>
      <div className={`${styles.ingredientTab} ${styles.boxShadowPurple}`}>
        <div className={styles.labelContainer}>{label}</div>
        <div className={styles.ingDetailContainer}>{labelDetail}</div>
      </div>

      <div className={`${styles.ingredientTab} ${styles.boxShadowPurple}`}>
        <div className={styles.title}>Nutrition facts</div>
        {/* <div className={styles.ingDetailContainer}>{nutritionFacts}</div> */}
      </div>
    </div>
  )
}

export default RecipeIngredient
