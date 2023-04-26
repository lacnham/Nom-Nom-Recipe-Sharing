import styles from '../../../styles/RecipeDetailPage/DetailRecipePage.module.css'
import SaveRecipeButton from './SaveRecipeButton'
import CollectionDropList from '../../UserProfileComponents/UserProfileCollection/UserCollectionDrop/CollectionDropList'
// import RenderLabel from '../RecipeDetailSection/RenderLabel'
import UserReview from './UserReviews'
import { useState } from 'react'
import ClickChangeStyle from '../../ClickChangeStyle'

const RecipeReview = props => {
  //   const buttonList = [
  //     {key: 1, name: 'Save', color: 'green', textColor: 'white'},
  //     {key: 2,name: 'Share', color: 'green', textColor: 'white'},
  //     {key: 3, name: 'Write review', color: 'green', textColor: 'white'}
  //   ]

  //  const button = buttonList.map((ele) => RenderLabel(ele));
  const styleElement = {
    default: 'none',
    change: 'block'
  }
  const [current, setCurrent] = useState('none')

  let handleClick = ClickChangeStyle(current, setCurrent, styleElement)

  return (
    <div
      className={`${styles.recipePrimaryContainer} ${styles.flexColumn} ${styles.boxShadowPurple}`}
    >
      <div className={`${styles.labelContainer} ${styles.temp}`}>
        <SaveRecipeButton
          fn={handleClick}
          onBlur={handleClick}
        ></SaveRecipeButton>
        <CollectionDropList
          recipe={props.recipe}
          current={current}
        ></CollectionDropList>
      </div>
      <UserReview></UserReview>
    </div>
  )
}
export default RecipeReview
