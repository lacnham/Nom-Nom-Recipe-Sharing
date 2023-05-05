import { Route } from 'react-router-dom'
import Header from '../components/Header'
import CollectionSection from '../components/UserProfileComponents/UserProfileCollection/CollectionSection'
import UserProfileSide from '../components/UserProfileComponents/UserProfileSide/UserProfileSide'
import styles from '../styles/UserProfile/UserProfileMainPage.module.css'
import { RecipeSection } from '../components/UserProfileComponents/UserProfileRecipe/RecipeSection'
import { useState } from 'react'
import { UpdateForm } from '../components/FormComponents/UpdateForm'

const UserProfileMainPage = () => {
  const [currentStyle, setCurrentStyle] = useState('none')
  const [section, setSection] = useState(
    <CollectionSection setCurrentStyle={setCurrentStyle} />
  )

  return (
    <>
      <Header />
      <div className={`${styles.body}`}>
        <div className={`${styles.flexRow} ${styles.profileMainContainer}`}>
          {/* Section container fixed width, height fit content, display grid 3 */}
          {/* <CollectionSection></CollectionSection> */}
          {/* <CollectionSection /> */}
          {section}
          <UserProfileSide setSection={setSection}></UserProfileSide>
        </div>
        <div
          className={`${styles.updateFormBackground}`}
          style={{ display: `${currentStyle}` }}
        >
          <UpdateForm />
        </div>
      </div>
    </>
  )
}

export default UserProfileMainPage
