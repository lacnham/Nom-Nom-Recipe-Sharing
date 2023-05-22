import ReactStars from 'react-rating-stars-component'
import styles from '../../../styles/RecipeDetailPage/DetailRecipePage.module.css'
import avatar from '../../../images/avatarTemp.png'
import { useEffect, useState } from 'react'
import axios from 'axios'

const UserReview = props => {
  let star = {
    size: 20,
    count: 5,
    activeColor: 'rgba(254, 216, 53, 1)',
    edit: false,
    value: 0,
    isHalf: true
  }

  const [imgURL, setImgURL] = useState('src/images/Default_img.svg')
  const [reviews, setReviews] = useState([])

  let config = {
    method: 'GET',
    url: `http://localhost:3000/recipe/${props.id}/reviews`
  }

  const fetchImage = async id => {
    let configImg = {
      method: 'GET',
      url: `http://localhost:3000/user/get-avatar/${id}`
    }
    try {
      const res = await axios.request(configImg)
      setImgURL(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  const fetch = async () => {
    try {
      const res = await axios.request(config)
      setReviews(res && res.data)
      fetchImage(res && res.data.id)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetch()
  }, [])

  const userReview = reviews.map(review => (
    <div
      key={review.review_id}
      className={`${styles.userReviewContainer} ${styles.boxShadowPurple}`}
    >
      <div className={`${styles.flexRow} ${styles.userInfoContainer}`}>
        <img className={`${styles.userAvatar}`} src={imgURL} />
        <div className={`${styles.flexColumm}`}>
          <div>{review.username}</div>
          <ReactStars {...star} value={review.rating} />
        </div>
      </div>
      <p className={`${styles.textOverFlowEcllipse}`}>{review.comment}</p>
    </div>
  ))

  return <>{userReview}</>
}

export default UserReview
