import styles from '../../../styles/RecipeDetailPage/DetailRecipePage.module.css'
import SaveRecipeButton from './SaveRecipeButton'
import CollectionDropList from '../../UserProfileComponents/UserProfileCollection/UserCollectionDrop/CollectionDropList'
// import RenderLabel from '../RecipeDetailSection/RenderLabel'
import UserReview from './UserReviews'
import { useState } from 'react'
import ClickChangeStyle from '../../ClickChangeStyle'
import { UserReviewForm } from './UserReviewForm'
import SocialMediaButton from '../../SocialMediaButton/SocialMediaButton'
import { useLocation } from 'react-router-dom'

const RecipeReview = props => {
  const styleElement = {
    default: 'none',
    change: 'block'
  }
  const [current, setCurrent] = useState('none')

  const handleClick = () => {
    let newStyle
    if (current == styleElement.default) {
      newStyle = styleElement.change
    }
    setCurrent(newStyle)
  }

  return (
    <div
      className={`${styles.recipePrimaryContainer} ${styles.flexColumn} ${styles.boxShadowPurple} ${styles.reviewsContainer}`}
    >
      <div className={`${styles.labelContainer} ${styles.temp}`}>
        <SaveRecipeButton fn={handleClick}></SaveRecipeButton>
        <CollectionDropList
          setCurrent={setCurrent}
          style={styleElement}
          recipe={props.recipe}
          current={current}
          id={props.id}
        ></CollectionDropList>
        <SocialMediaButton link={window.location.hostname} />
      </div>
      <UserReviewForm id={props.id} />
      <UserReview id={props.id}></UserReview>
    </div>
  )
}
export default RecipeReview
