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

  // let handleClick = ClickChangeStyle(current, setCurrent, styleElement)

  const handleClick = () => {
    let newStyle
    if (current == styleElement.default) {
      newStyle = styleElement.change
      console.log(1)
    }
    setCurrent(newStyle)
  }

  // const handleBlur = () => {
  //   let newStyle
  //   if (current == styleElement.change) {
  //     newStyle = styleElement.default
  //     console.log(2)
  //   }
  //   setCurrent(newStyle)
  // }

  return (
    <div
      className={`${styles.recipePrimaryContainer} ${styles.flexColumn} ${styles.boxShadowPurple} ${styles.reviewsContainer}`}
    >
      <div className={`${styles.labelContainer} ${styles.temp}`}>
        <SaveRecipeButton
          fn={handleClick}
          // onBlur={handleBlur}
        ></SaveRecipeButton>
        <CollectionDropList
          setCurrent={setCurrent}
          style={styleElement}
          recipe={props.recipe}
          current={current}
          id={props.id}
        ></CollectionDropList>
        <SocialMediaButton link={window.location.href} />
      </div>
      <UserReviewForm id={props.id} />
      <UserReview id={props.id}></UserReview>
    </div>
  )
}
export default RecipeReview
