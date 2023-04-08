import styles from '../../../styles/UserProfile/UserProfileMainPage.module.css'

import { useState } from 'react'

const Collections = props => {
  const tempCollections = [{ title: '', description: '', img: '', recipes: [] }]

  const [list, setlist] = useState(props.recipes)

  return (
    <div className={`${styles.collectionContainer} ${styles.boxShadowPurple}`}>
      <div className={`${styles.contContainer} ${styles.flexColumn}`}>
        <img alt="collection image" src={props.collection.img} />
        <div className={`${styles.title}`}>{props.collection.title}</div>
        <div className={`${styles.textOverFlowEcllipse} ${styles.text}`}>
          {props.collection.description}
        </div>
      </div>
      {/* img */}
      {/* title */}
      {/* des */}
    </div>
  )
}

export const addToCollection = props => {
  const newList = props.collection.recipe.concat(recipe)
  setlist(newList)
}
export default Collections
