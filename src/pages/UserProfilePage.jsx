import { Route } from 'react-router-dom'
import Header from '../components/Header'
import CollectionSection from '../components/UserProfileComponents/UserProfileCollection/CollectionSection'
import UserProfileSide from '../components/UserProfileComponents/UserProfileSide/UserProfileSide'
import styles from '../styles/UserProfile/UserProfileMainPage.module.css'
import { RecipeSection } from '../components/UserProfileComponents/UserProfileRecipe/RecipeSection'
import { useState } from 'react'

const UserProfileMainPage = () => {
  const [section, setSection] = useState(<CollectionSection />)

  return (
    <>
      <Header />
      <div className={`${styles.body}`}>
        <div className={`${styles.flexRow} ${styles.profileMainContainer}`}>
          {/* Section container fixed width, height fit content, display grid 3 */}
          {/* <CollectionSection></CollectionSection> */}
          {/* <CollectionSection /> */}
          {section}
          {/* UserProfileContainer fixed width */}
          <UserProfileSide setSection={setSection}></UserProfileSide>
        </div>
      </div>
    </>
  )
}

export default UserProfileMainPage
