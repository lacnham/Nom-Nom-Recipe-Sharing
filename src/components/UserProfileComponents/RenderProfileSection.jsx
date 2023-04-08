import { DefaultButton } from '../Button'
import styles from '../../styles/RecipeDetailPage/DetailRecipePage.module.css'

export const RenderProfileSection = (section, setSection) => {
  const handleClick = () => {
    console.log(section)
    console.log('setSection', setSection)
    // console.log(1)
    // let count = 0
    setSection(section.path)
  }

  const style = {
    backgroundColor: section.color,
    color: section.textColor,
    backgroundColorHover: '',
    colorHover: section.color
  }

  return (
    <DefaultButton
      className={`${styles.label}`}
      type={'button'}
      key={section.key}
      style={style}
      fn={handleClick}
      options={section.name}
    ></DefaultButton>
  )
}
