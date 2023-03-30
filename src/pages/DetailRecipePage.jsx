import Header from '../components/Header'
import styles from '../styles/DetailRecipePage.module.css'
import image from '../images/recipeImage.png'
import timeIcon from '../images/Nom nom icons/Time_atack.png'
import peopleIcon from '../images/Nom nom icons/User_alt_fill.png'
import doneIcon from '../images/Nom nom icons/Done.png'

const RecipeIntro = () => {
  const recipe = {
    title: '',
    src: image
  }

  return (
    <div className={styles.recipePrimaryContainer}>
      <img className={styles.recipeImg} src={recipe.src} />
      <div className={styles.title}>Beef steak</div>
      <div className={styles.commonInfo}>
        <div className={`${styles.commonInfoEle} ${styles.flexRow}`}>
          <img src={timeIcon} alt="duration icon" />
          <div>40 minutes</div>
        </div>
        <div className={`${styles.commonInfoEle} ${styles.flexRow}`}>
          <img src={peopleIcon} alt="people icon" />
          <div>1 people</div>
        </div>
      </div>
    </div>
  )
}

const RenderLabel = () => {
  const labelProps = [
    { key: 1, name: 'Beef', color: 'red', textColor: 'white' },
    { key: 2, name: 'Pepper', color: 'black', textColor: 'white' },
    { key: 3, name: 'Potato', color: 'Yellow', textColor: 'black' }
  ]

  const label = labelProps.map(item => (
    <div
      key={item.key}
      className={styles.label}
      style={{ backgroundColor: item.color, color: item.textColor }}
    >
      {item.name}
    </div>
  ))

  return label
}

// const RenderDetail = (props) => {

//     // const detailProps = [
//     //     {key: 1, name: "Beef", amount: "200g"},
//     //     {key: 2, name: "Beef", amount: "200g"},
//     //     {key: 3, name: "Beef", amount: "200g"},
//     //     {key: 4, name: "Beef", amount: "200g"},
//     //     {key: 5, name: "Beef", amount: "200g"},
//     //     {key: 6, name: "Beef", amount: "200g"},
//     //     {key: 7, name: "Beef", amount: "200g"},
//     // ]

//     const detailEle = props.map((ele) =>
//         <div key={ele.key} className={styles.eleContainer}>
//             <img src={doneIcon}/>
//             <div>{ele.name}</div>
//             <div>{ele.amount}</div>
//         </div>
//     )

//     return(
//         <div className={styles.ingDetailContainer}>
//             {detailEle}
//         </div>
//     );
// }

const RenderDetail = props => {
  // const detailProps = [
  //     {key: 1, name: "Beef", amount: "200g"},
  //     {key: 2, name: "Beef", amount: "200g"},
  //     {key: 3, name: "Beef", amount: "200g"},
  //     {key: 4, name: "Beef", amount: "200g"},
  //     {key: 5, name: "Beef", amount: "200g"},
  //     {key: 6, name: "Beef", amount: "200g"},
  //     {key: 7, name: "Beef", amount: "200g"},
  // ]

  // const detailEle = props.map((ele) =>
  //     <div key={ele.key} className={styles.eleContainer}>
  //         <img src={doneIcon}/>
  //         <div>{ele.name}</div>
  //         <div>{ele.amount}</div>
  //     </div>
  // )

  return (
    // <div className={styles.ingDetailContainer}>
    <div key={props.key} className={`${styles.eleContainer} ${styles.flexRow}`}>
      <img src={doneIcon} />
      <div>{props.name}</div>
      <div>{props.amount}</div>
    </div>
    // </div>
  )
}

// const RenderDetail

const RecipeIngredient = () => {
  const detailProps = [
    { key: 1, name: 'Beef', amount: '200g' },
    { key: 2, name: 'Beef', amount: '200g' },
    { key: 3, name: 'Beef', amount: '200g' },
    { key: 4, name: 'Beef', amount: '200g' },
    { key: 5, name: 'Beef', amount: '200g' },
    { key: 6, name: 'Beef', amount: '200g' },
    { key: 7, name: 'Beef', amount: '200g' }
  ]

  const labelDetail = detailProps.map(ele => RenderDetail(ele))

  return (
    <div className={styles.ingredientContainer}>
      <div className={styles.ingredientTab}>
        <div className={styles.labelContainer}>
          <RenderLabel />
        </div>
        <div className={styles.ingDetailContainer}>{labelDetail}</div>
      </div>

      <div className={styles.ingredientTab}>
        <div className={styles.title}>Nutrition facts</div>
        <div className={styles.ingDetailContainer}>{labelDetail}</div>
      </div>
    </div>
  )
}

const RecipeDescription = () => {
  return (
    <div className={styles.recipePrimaryContainer}>
      <div className={styles.title}>Description</div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
  )
}

const DetailRecipePage = () => {

  return (
    <>
      <Header />
      <div className={`${styles.body}`}>
        <div className={`${styles.mainContainer} ${styles.flexRow}`}>
          <div className={`${styles.recipeDetail} ${styles.flexColumn}`}>
            
            <RecipeIntro />
            <RecipeDescription />
            <RecipeIngredient />
          </div>
          <div className={styles.reviewSection}></div>
        </div>
      </div>
    </>
  )
}

export default DetailRecipePage
