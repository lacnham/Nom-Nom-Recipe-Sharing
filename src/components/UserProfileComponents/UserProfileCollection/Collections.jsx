import { Link } from 'react-router-dom'
import styles from '../../../styles/UserProfile/UserProfileMainPage.module.css'

import { useState } from 'react'
// import { CollectionRecipes } from './CollectionRecipes'

const Collections = props => {
  const handleClick = () => {
    // alert('clicked')
    props.setCurrentStyle('flex')
  }

  return (
    <div
      className={`${styles.collectionContainer} ${styles.boxShadowPurple} ${styles.flexColumn}`}
    >
      <Link
        to={`/collection/${props.collection.collection_id}`}
        key={props.collection.collection_id}
        // className={`${styles.collectionContainer} ${styles.boxShadowPurple} ${styles.flexColumn}`}
      >
        <div className={`${styles.contContainer} ${styles.flexColumn}`}>
          <img alt="collection image" src={props.collection.img} />
          <div className={`${styles.title}`}>{props.collection.name}</div>
          <div className={`${styles.textOverFlowEcllipse} ${styles.text}`}>
            {props.collection.note}
          </div>
        </div>

        {/* img */}
        {/* title */}
        {/* des */}
      </Link>
      <button onClick={handleClick} className={styles.updateDeleteContainer}>
        Update
      </button>
    </div>
  )
}

// export const addToCollection = props => {
//   const newList = props.collection.recipe.concat(recipe)
//   setlist(newList)
// }
export default Collections
