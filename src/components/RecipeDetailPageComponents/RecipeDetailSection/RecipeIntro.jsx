import styles from '../../../styles/RecipeDetailPage/DetailRecipePage.module.css'

import timeIcon from '../../../images/Nom nom icons/Time_atack.png'
import peopleIcon from '../../../images/Nom nom icons/User_alt_fill.png'
import { useEffect, useState } from 'react'
import axios from 'axios'

const RecipeIntro = props => {
  const [imageURL, setImageURL] = useState('/src/images/Default_img.svg')
  const [imageError, setImageError] = useState(false)

  const handleImageError = () => {
    if (!imageError) {
      setImageURL('src/images/Default_img.svg')
      setImageError(true)
    }
  }

  if (props.recipe.commonInfo.dietType == null) {
    props.recipe.commonInfo.dietType = 'none'
  }
  let config = {
    method: 'get',
    url: `http://localhost:3000/recipe/get-img/${props.recipe.id}`
  }

  useEffect(() => {
    axios
      .request(config)
      .then(res => {
        // if (res.data.msg) {
        //   setImageURL(defaultImg)
        // } else {
        setImageURL(res.data)
        // }
      })
      .catch(error => console.log(error))
  })

  const dietary = props.recipe.commonInfo.dietType
    ? props.recipe.commonInfo.dietType.map((ele, id) => (
        <div
          key={id}
          className={styles.label}
          style={{ marginRight: '8px', padding: '4px', borderRadius: '8px' }}
        >
          {ele.name}
        </div>
      ))
    : null

  return (
    <div
      className={`${styles.recipePrimaryContainer} ${styles.boxShadowPurple}`}
    >
      <img
        className={styles.recipeImg}
        alt={`${props.recipe.title} img`}
        src={imageURL}
        onError={handleImageError}
      />
      <div className={styles.title}>{props.recipe.title}</div>
      <div className={styles.commonInfo}>
        <div className={`${styles.commonInfoEle} ${styles.flexRow}`}>
          <i className="fa-solid fa-clock"></i>
          <div>{props.recipe.commonInfo.duration}</div>
        </div>
        <div className={`${styles.commonInfoEle} ${styles.flexRow}`}>
          <i className="fa-solid fa-user"></i>

          <div>
            <input
              type="number"
              min={1}
              defaultValue={parseInt(props.recipe.commonInfo.serving)}
              // value={parseInt(props.recipe.commonInfo.serving)}
              // placeholder={parseInt(props.recipe.commonInfo.serving)}
              onChange={e => props.handleChange(e)}
              style={{
                width: '60px',
                borderStyle: 'none',
                backgroundColor: 'whitesmoke',
                height: '20px',
                margin: '0',
                border: '0',
                outline: 'none',
                padding: '0 0 0 8px',
                textAlign: 'right'
              }}
            />{' '}
            people
          </div>
        </div>

        <div className={`${styles.commonInfoEle} ${styles.flexRow}`}>
          <div>
            <b>Diet type</b>: {dietary}
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecipeIntro
