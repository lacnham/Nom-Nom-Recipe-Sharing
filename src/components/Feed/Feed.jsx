import React, { useState, useEffect, Suspense } from 'react'

import styles from '../../styles/LandingPage/Feed.module.css'
import { useContext } from 'react'
import { AuthContext } from '../SessionVerification/AuthContext'
import { Link } from 'react-router-dom'
export default function Feed() {
  //   const [like, setLike] = useState(post.like)
  //   const [isliked, setIsLiked] = useState(false)

  //   const likeHandler = () => {
  //     setLike(isliked ? like - 1 : like + 1)
  //     setIsLiked(!isliked)
  //   }
  const { userData } = useContext(AuthContext)

  const [feedData, setFeedData] = useState([])

  async function fetchRecommendationsByDietary(userID) {
    const url = `http://localhost:3000/recipe/recommendations/dietary/${userID}`
    try {
      const response = await fetch(url)
      if (response.ok) {
        const data = await response.json()

        const mergedData = Object.values(
          data.data.reduce((merged, item) => {
            if (!merged[item.recipe_id]) {
              merged[item.recipe_id] = { ...item }
            } else {
              merged[item.recipe_id].author_id = item.author_id
              merged[item.recipe_id].name = item.name
              merged[item.recipe_id].created_at = item.created_at
              merged[item.recipe_id].updated_at = item.updated_at
              // Merge any other properties as needed
            }

            return merged
          }, {})
        )

        const updatedFeedData = await Promise.all(
          mergedData.map(async post => {
            const caloriesData = await fetchCaloriesData(post.recipe_id)
            return { ...post, caloriesData }
          })
        )

        setFeedData(updatedFeedData)
        console.log(feedData)
      } else {
        throw new Error('Failed to fetch data')
      }
    } catch (error) {
      console.error(error)
    }
  }

  async function fetchCaloriesData(recipeId) {
    const data = {
      servingSize: 1
    }

    const url = `http://localhost:3000/recipe/calories/based_servings/${recipeId}`

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })

      if (response.ok) {
        const result = await response.text()
        const parsedResult = JSON.parse(result)
        return parsedResult.totalCalories
      } else {
        throw new Error('Failed to send data')
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchRecommendationsByDietary(userData.user.id)
  }, [])

  function getTimeElapsed(createdAt) {
    const postDate = new Date(createdAt)
    const currentDate = new Date()

    // Calculate the time difference in milliseconds
    const timeDiff = currentDate.getTime() - postDate.getTime()

    // Calculate the time difference in different units
    const seconds = Math.floor(timeDiff / 1000)
    const minutes = Math.floor(seconds / 60)
    const hours = Math.floor(minutes / 60)
    const days = Math.floor(hours / 24)
    const months = Math.floor(days / 30)
    const years = Math.floor(months / 12)

    if (years > 0) {
      return `${years} year${years > 1 ? 's' : ''} ago`
    } else if (months > 0) {
      return `${months} month${months > 1 ? 's' : ''} ago`
    } else if (days > 0) {
      return `${days} day${days > 1 ? 's' : ''} ago`
    } else if (hours > 0) {
      return `${hours} hour${hours > 1 ? 's' : ''} ago`
    } else {
      return `${minutes} minute${minutes > 1 ? 's' : ''} ago`
    }
  }

  console.log(feedData)

  return (
    <div>
      <div>Feed here</div>

      {feedData.map(post => (
        <Suspense
          fallback={<div className={styles.cardLazyLoading}></div>}
          key={post.recipe_id}
        >
          <div>
            <Post
              name={post.name}
              description={post.description}
              timeElapsed={getTimeElapsed(post.created_at)}
              duration={post.duration.minutes}
              caloriesData={post.caloriesData}
              serving_size={post.serving_size}
              image_link={post.image_link}
            />
          </div>
        </Suspense>
      ))}
    </div>
  )
}

function Post(props) {
  // props
  return (
    <div className={styles.post}>
      <div className={styles.postWrapper}>
        <div className={styles.postTop}>
          <div className={styles.postTopLeft}>
            <img
              className={styles.postProfileImg}
              // src={
              //   Users.filter(u => u.id === post.userId)[0].profilePicture
              // }
              alt=""
            />
            <span className={styles.postUsername}>
              {/* {Users.filter(u => u.id === post.userId)[0].username} */}
              usename
            </span>
            <span className={styles.postDate}>{props.timeElapsed}</span>
          </div>
          <div className={styles.postTopRight}>
            MoreVert
            {/* <MoreVert /> */}
          </div>
        </div>
        <div className={styles.postCenter}>
          <span className={styles.postInfo}>
            <span>
              <i className="fa-solid fa-stopwatch"></i>
              <span>{props.duration} mins</span>
            </span>
            <span>
              <i className="fa-solid fa-fire"></i>
              <span>{props.caloriesData} kcal</span>
            </span>
            <span>
              <i className="fa-solid fa-bowl-food"></i>
              <span>Serving: {props.serving_size}</span>
            </span>
          </span>
          <br />
          <span className={styles.postText}>
            <h4>{props.name}</h4>
            <p>{props.description}</p>
          </span>
          <div className={styles.postImgContainer}>
            <img
              className={styles.postImg}
              // src={props.image_link}
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"
              alt="Recipe Image"
            />
          </div>
        </div>
        <div className={styles.postBottom}>
          <div className={styles.postBottomLeft} keyword="place_holder">
            <img
              className={styles.likeIcon}
              src="/assets/like.png"
              // onClick={likeHandler}
              alt=""
            />
            <img
              className={styles.likeIcon}
              src="/assets/heart.png"
              // onClick={likeHandler}
              alt=""
            />
            <span className={styles.postLikeCounter}>666 people like it</span>
          </div>
          <div className={styles.postBottomRight}>
            <span className={styles.postVisit}>
              <i className="fa-solid fa-right-long fa-2xl"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
