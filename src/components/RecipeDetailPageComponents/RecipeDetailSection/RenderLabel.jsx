import styles from '../../../styles/RecipeDetailPage/DetailRecipePage.module.css'
import {DefaultButton } from '../../Button'

const RenderLabel = props => {


  return (
    <DefaultButton
      className={`${styles.label}`}
      type={'button'}
      key={props.key}
      style={{ backgroundColor: props.color, color: props.textColor }}
      fn={''}
      options={props.name}
    >
    </DefaultButton>
  )
}

export default RenderLabel
