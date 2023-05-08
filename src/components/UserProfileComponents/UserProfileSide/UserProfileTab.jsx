import { useState } from 'react'
import styles from '../../../styles/RecipeDetailPage/DetailRecipePage.module.css'
import { RenderProfileSection } from '../RenderProfileSection'
import CollectionSection from '../UserProfileCollection/CollectionSection'
import { RecipeSection } from '../UserProfileRecipe/RecipeSection'
import { DefaultButton } from '../../Button'

export const UserProfileTab = props => {
  // const tabList = [
  //   {
  //     key: 1,
  //     name: 'My collection'
  //   },
  //   {
  //     key: 2,
  //     name: 'My recipe'
  //   },
  //   {
  //     key: 3,
  //     name: 'Nutrition intake'
  //   }
  // ]
  // const tab = tabList.map(ele => RenderProfileSection(ele, props.setDisplay))
  const style = {
    backgroundColor: ' #3d233a',
    color: 'white',
    backgroundColorHover: '',
    colorHover: ' #3d233a'
  }

  const handleClick = () => {
    let newDisplay = {
      collection: '',
      recipe: ''
    }
    if (props.id == 2) {
      newDisplay = {
        collection: 'none',
        recipe: 'flex'
      }
    } else {
      newDisplay = {
        collection: 'flex',
        recipe: 'none'
      }
    }

    props.setDisplay(newDisplay)
  }

  // const tab = tabList.map(ele => (
  //   <DefaultButton
  //     className={`${styles.label}`}
  //     type={'button'}
  //     key={ele.key}
  //     style={ele.style}
  //     fn={handleClick}
  //     options={section.name}
  //   ></DefaultButton>
  // ))

  return (
    <DefaultButton
      className={`${styles.label}`}
      type={'button'}
      key={''}
      style={style}
      fn={handleClick}
      options={props.name}
    ></DefaultButton>
  )
}
