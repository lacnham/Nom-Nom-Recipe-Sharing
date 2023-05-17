import styles from '../styles/Card.module.css'
import React from 'react'
import { useState } from 'react'

function CardImage(props) {
  const [imageURL, setImageURL] = useState(
    props.image || 'src/images/Default_img.svg'
  )
  const [imageError, setImageError] = useState(false)

  const handleImageError = () => {
    if (!imageError) {
      setImageURL('src/images/Default_img.svg')
      setImageError(true)
      console.log()
    }
  }

  const imageStyle = {
    width:
      imageURL != 'src/images/Default_img.svg' ? '100% !important' : '200px',
    objectFit: 'cover'
  }

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }

  return (
    <div className={styles.Image} style={containerStyle}>
      <img
        style={imageStyle}
        src={imageURL}
        alt="Seattle"
        loading="lazy"
        onError={handleImageError}
      />
    </div>
  )
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
