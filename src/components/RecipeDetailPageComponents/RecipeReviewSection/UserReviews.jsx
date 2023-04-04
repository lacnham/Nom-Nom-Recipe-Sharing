import ReactStars from 'react-rating-stars-component'
import styles from '../../../styles/RecipeDetailPage/DetailRecipePage.module.css'
import avatar from '../../../images/avatarTemp.png'
// import RatingStars from './ReviewRatingStars';

const UserReview = () => {
  let star = {
    size: 20,
    count: 5,
    activeColor: 'rgba(254, 216, 53, 1)',
    edit: false,
    value: 0,
    isHalf: true,
  }

  const userReviewList = [
    {
      key: 1,
      avatar: avatar,
      name: 'Khoi',
      ratingValue: 4,
      feedBack:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur'
    },
    {
        key: 2,
        avatar: avatar,
        name: 'Khoi',
        ratingValue: 3.5,
        feedBack:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur'
      },
      {
        key: 3,
        avatar: avatar,
        name: 'Khoi',
        ratingValue: 5,
        feedBack:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur'
      },
      {
        key: 4,
        avatar: avatar,
        name: 'Khoi',
        ratingValue: 2,
        feedBack:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur'
      },
  ]

  const userReview = userReviewList.map(review => (
    <div key={review.key} className={`${styles.userReviewContainer}`}>
      <div className={`${styles.flexRow} ${styles.userInfoContainer}`}>
        <img className={`${styles.userAvatar}`} src={review.avatar} />
        <div className={`${styles.flexColumm}`}>
          <div>{review.name}</div>
          <ReactStars {...star} value={review.ratingValue} />
        </div>
      </div>
      <p className={`${styles.textOverFlowEcllipse}`}>{review.feedBack}</p>
    </div>
  ))

  return <>{userReview}</>
}

export default UserReview
