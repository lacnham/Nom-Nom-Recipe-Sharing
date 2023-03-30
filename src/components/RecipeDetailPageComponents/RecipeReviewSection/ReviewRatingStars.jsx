
import ReactStars from 'react-rating-stars-component'



const defaultStar = {
    size: 20,
    count: 5,
    color: "black",
    activeColor: "rgba(254, 216, 53, 1)",
    value: 5,
    a11y: true,
    isHalf: true,
    // emptyIcon: <i className="far fa-star" />,
    // halfIcon: <i className="fa fa-star-half-alt" />,
    // filledIcon: <i className="fa fa-star" />,
  }

const RatingStars = () => {
  


    return(

        <ReactStars {...defaultStar} />
    );
}



export default RatingStars;