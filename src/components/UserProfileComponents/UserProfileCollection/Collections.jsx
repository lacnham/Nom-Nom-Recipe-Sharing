import styles from '../../../styles/UserProfile/UserProfileMainPage.module.css'

import img from '../../../images/recipeImage.png'
import { useState } from 'react'

const Collections = (props) => {

  const tempCollections = [
    {title: "", description: "", img: "", recipes: []}
  ]

  const [list, setlist] = useState(props.recipes);

  const addToCollection = ({recipe}) => {
    const newList =  props.recipe.concat(recipe);
    setlist(newList);
  }

  return (
    <div className={`${styles.collectionContainer} ${styles.boxShadowPurple}`}>
      <div className={`${styles.contContainer} ${styles.flexColumn}`}>
        <img alt="collection image" src={props.img}/>
        <div className={`${styles.title}`}>{props.title}</div>
        <div className={`${styles.textOverFlowEcllipse} ${styles.text}`}>
          {props.description}
        </div>
      </div>
      {/* img */}
      {/* title */}
      {/* des */}
    </div>
  )
}
export default Collections
