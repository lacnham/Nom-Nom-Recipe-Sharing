import styles from '../../../styles/RecipeDetailPage/DetailRecipePage.module.css'
import RenderLabel from '../RecipeDetailSection/RenderLabel';
import UserReview from './UserReviews';

const RecipeReview = () => {

    const buttonList = [
      {key: 1, name: 'Save', color: 'green', textColor: 'white'},
      {key: 2,name: 'Share', color: 'green', textColor: 'white'},
      {key: 3, name: 'Write review', color: 'green', textColor: 'white'}
    ]
  
   const button = buttonList.map((ele) => RenderLabel(ele));
  
    return ( 
      <div className={`${styles.recipePrimaryContainer} ${styles.flexColumn} ${styles.boxShadowPurple}`}>
        <div className={`${styles.labelContainer} ${styles.temp}`}>
          {button}
        </div>
        {/* <div className='older user revierw'></div> */}
        <UserReview></UserReview>
      </div>
    );
  }
  export default RecipeReview;