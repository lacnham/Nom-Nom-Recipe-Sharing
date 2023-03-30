import styles from '../../../styles/RecipeDetailPage/DetailRecipePage.module.css'
import RenderLabel from '../RecipeDetailSection/RenderLabel';
import CurrentUserReview from './CurrentUserReview';

const RecipeReview = () => {

    const buttonList = [
      {key: 1, name: 'Save', color: 'green', textColor: 'white'},
      {key: 2,name: 'Share', color: 'green', textColor: 'white'}
    ]
  
   const button = buttonList.map((ele) => RenderLabel(ele));
  
    return ( 
      <div className={`${styles.reviewSection} ${styles.flexColumn}`}>
        <div className={`${styles.labelContainer}`}>
          {button}
        </div>
        <CurrentUserReview/>
        {/* <div className='older user revierw'></div> */}
      </div>
    );
  }
  export default RecipeReview;