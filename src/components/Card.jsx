import styles from '../styles/Card.module.css'
import React from 'react'

function CardImage(props) {
  const isImageURL = props.image
  // If an image was passed:
  if (isImageURL) {
    return (
      <div className={styles.Image} style={{ width: props.width + 'px'}}>
        <img
          style={{ width: props.width + 'px', marginTop: '-8%' }}
          src={props.image}
          alt="Seattle"
          loading="lazy"
        />
      </div>
    )
  }
  return null
}

function CardContent(props) {
  return (
    <div className={styles.CardContent}>
      <p className={styles.CardTitle}>{props.title}</p>
      {props.category.map((category, index) => (
        <span key={index} className={styles.pill}>
          {category}
        </span>
      ))}

      <p className={styles.LocationLabel}>{props.location}</p>
      <p className={`${styles.tooltip} ${styles.Description}`}>
        {props.description}
      </p>
    </div>
  )
}

export default class Card extends React.Component {
  render() {
    return (
      <div className={styles.Card}>
        <div>
          <CardImage image={this.props.image} width={this.props.width} />
          <CardContent
            title={this.props.title}
            location={this.props.location}
            description={this.props.description}
            category={this.props.category}
          />
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.seeMoreButton}>See More</button>
        </div>
      </div>
    )
  }
}

Card.defaultProps = {
  title: 'Template - Card Title',
  category: ['asd', 'asd1', 'asd2'],
  location: 'Location label',
  description: 'Template description textbox'
}
