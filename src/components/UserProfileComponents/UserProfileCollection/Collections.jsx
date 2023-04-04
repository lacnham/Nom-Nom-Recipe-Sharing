import styles from '../../../styles/UserProfile/UserProfileMainPage.module.css'

import img from '../../../images/recipeImage.png'

const Collections = () => {
  return (
    <div className={`${styles.collectionContainer} ${styles.boxShadowPurple}`}>
      <div className={`${styles.contContainer} ${styles.flexColumn}`}>
        <img alt="collection image" src={img}>
          {/* get image from the first recipe, input image */}
        </img>
        <div className={`${styles.title}`}>Recipe</div>
        <div className={`${styles.textOverFlowEcllipse} ${styles.text}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </div>
      </div>
      {/* img */}
      {/* title */}
      {/* des */}
    </div>
  )
}

export default Collections
