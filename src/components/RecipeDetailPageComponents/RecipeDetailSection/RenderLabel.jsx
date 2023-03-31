import styles from '../../../styles/RecipeDetailPage/DetailRecipePage.module.css'

const RenderLabel = props => {
  return (
    <div
      key={props.key}
      className={styles.label}
      style={{ backgroundColor: props.color, color: props.textColor }}
    >
      {props.name}
    </div>
  )
}

export default RenderLabel
