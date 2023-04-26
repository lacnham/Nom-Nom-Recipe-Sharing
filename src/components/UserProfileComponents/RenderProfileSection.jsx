import { DefaultButton } from '../Button'
import styles from '../../styles/RecipeDetailPage/DetailRecipePage.module.css'

export const RenderProfileSection = (section, setSection) => {
  const style = {
    backgroundColor: section.color,
    color: section.textColor,
    backgroundColorHover: '',
    colorHover: section.color
  }
  const handleClick = () => {
    // console.log(section)
    // console.log('setSection', setSection)
    // console.log(1)
    // let count = 0
    // style.backgroundColor = 'white'
    setSection(section.path)
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
