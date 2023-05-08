import ReactStars from 'react-rating-stars-component'
import styles from '../../../styles/RecipeDetailPage/DetailRecipePage.module.css'
import avatar from '../../../images/avatarTemp.png'
import { useEffect, useState } from 'react'
import axios from 'axios'
// import RatingStars from './ReviewRatingStars';

const UserReview = props => {
  let star = {
    size: 20,
    count: 5,
    activeColor: 'rgba(254, 216, 53, 1)',
    edit: false,
    value: 0,
    isHalf: true
  }

  // const userReviewList = [
  //   {
  //     key: 1,
  //     avatar: avatar,
  //     name: 'Khoi',
  //     ratingValue: 4,
  //     feedBack:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur'
  //   },
  //   {
  //     key: 2,
  //     avatar: avatar,
  //     name: 'Khoi',
  //     ratingValue: 3.5,
  //     feedBack:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur'
  //   },
  //   {
  //     key: 3,
  //     avatar: avatar,
  //     name: 'Khoi',
  //     ratingValue: 5,
  //     feedBack:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur'
  //   },
  //   {
  //     key: 4,
  //     avatar: avatar,
  //     name: 'Khoi',
  //     ratingValue: 2,
  //     feedBack:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur'
  //   }
  // ]

  const [reviews, setReviews] = useState([])

  let config = {
    method: 'GET',
    url: `http://localhost:3000/recipe/${props.id}/reviews`
  }

  const fetch = async () => {
    try {
      const res = await axios.request(config)
      setReviews(res && res.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetch()
  }, [])

  console.log('This is the reviews', reviews)

  const userReview = reviews.map(review => (
    <div
      key={review.review_id}
      className={`${styles.userReviewContainer} ${styles.boxShadowPurple}`}
    >
      <div className={`${styles.flexRow} ${styles.userInfoContainer}`}>
        <img className={`${styles.userAvatar}`} src={review.avatar} />
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
