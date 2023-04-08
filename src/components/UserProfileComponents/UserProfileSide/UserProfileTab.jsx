import { useState } from 'react'
import styles from '../../../styles/UserProfile/UserProfileDetail/UserProfileDetail.module.css'
import { RenderProfileSection } from '../RenderProfileSection'
import CollectionSection from '../UserProfileCollection/CollectionSection'
import { RecipeSection } from '../UserProfileRecipe/RecipeSection'

export const UserProfileTab = props => {
  const tabList = [
    {
      key: 1,
      name: 'My collection',
      color: ' #3d233a',
      textColor: 'white',
      path: <CollectionSection />
    },
    {
      key: 2,
      name: 'My recipe',
      color: ' #3d233a',
      textColor: 'white',
      path: <RecipeSection />
    },
    {
      key: 3,
      name: 'Nutrition intake',
      color: ' #3d233a',
      textColor: 'white',
      path: ''
    }
  ]
  const tab = tabList.map(ele => RenderProfileSection(ele, props.setSection))

  return <div className={`${styles.tabContainer} ${styles.flexRow}`}>{tab}</div>
}
