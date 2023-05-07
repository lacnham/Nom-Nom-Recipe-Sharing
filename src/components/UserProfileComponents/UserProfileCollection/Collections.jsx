import { Link } from 'react-router-dom'
import styles from '../../../styles/UserProfile/UserProfileMainPage.module.css'

import { useState } from 'react'
import { UpdateButton } from '../UpdateProfileButton'
import { UpdateForm } from '../../FormComponents/UpdateForm'
import { RecipeTemp } from './RecipeTemp'
// import { CollectionRecipes } from './CollectionRecipes'

const Collections = props => {
  const handleDisplay = () => {
    props.setCurrentStyle('flex')
  }
  const handleClick = () => {
    // alert('clicked')

    props.setUpdateForm(
      <UpdateForm
        collection={props.collection}
        setUpdateForm={props.setUpdateForm}
        setCurrentStyle={props.setCurrentStyle}
      />
    )
    // handleDisplay()
    props.setCurrentStyle('flex')
  }

  // const handleSetSection = () => {
  //   props.setSection(<RecipeTemp id={props.collection.collection_id} />)
  // }

  return (
    <div
      className={`${styles.collectionContainer} ${styles.boxShadowPurple} ${styles.flexColumn}`}
    >
      <Link
        to={`/collection/${props.collection.collection_id}`}
        key={props.collection.collection_id}
      >
        <div className={`${styles.contContainer} ${styles.flexColumn}`}>
          <img alt="collection image" src={props.collection.img} />
          <div className={`${styles.title}`}>{props.collection.name}</div>
          <div className={`${styles.textOverFlowEcllipse} ${styles.text}`}>
            {props.collection.note}
          </div>
        </div>
      </Link>
      {/* <div
        // to={`/collection/${props.collection.collection_id}`}
        onClick={handleSetSection}
        key={props.collection.collection_id}
      >
        <div className={`${styles.contContainer} ${styles.flexColumn}`}>
          <img alt="collection image" src={props.collection.img} />
          <div className={`${styles.title}`}>{props.collection.name}</div>
          <div className={`${styles.textOverFlowEcllipse} ${styles.text}`}>
            {props.collection.note}
          </div>
        </div>
      </div> */}
      {/* <button onClick={handleClick} className={styles.updateDeleteContainer}>
        Update
      </button> */}
      <UpdateButton fn={handleClick} />
    </div>
  )
}

// export const addToCollection = props => {
//   const newList = props.collection.recipe.concat(recipe)
//   setlist(newList)
// }
export default Collections
