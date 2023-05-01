import styles from '../styles/DietCard.module.css'
import React from 'react'

function DietCardContent(props) {
  return (
    <div className={styles.dietCardContent}>
      <p className={styles.dietCardTitle}>{props.title}</p>
      {/* {props.category.map((category, index) => (
        <span key={index} className={styles.pill}>
          {category}
        </span>
      ))} */}

      <p className={styles.LocationLabel}>{props.location}</p>
    </div>
  )
}

export default class DietCard extends React.Component {
  render() {
    return (
      <div className={styles.dietCard}>
        <div>
          <DietCardContent
            title={this.props.title}
            location={this.props.location}
            description={this.props.description}
            category={this.props.category}
          />
        </div>
      </div>
    )
  }
}

DietCard.defaultProps = {
  title: 'Long term',
  category: ['Plans'],
  location: 'Create a vition. To get started, imagene your life.',
  description: ''
}
