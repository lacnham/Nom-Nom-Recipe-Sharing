import styles from '../../../styles/UserProfile/UserProfileMainPage.module.css'
import Collections from './Collections'
import img from '../../../images/recipeImage.png'
import { FetchUserCollections } from './FetchUserCollections'

const CollectionSection = props => {
  // const collection = {
  //   title: 'tet',
  //   description: 'lorem',
  //   img: img
  // }

  const collections = FetchUserCollections()

  console.log(collections)

  if (!collections) {
    return <div>Loading user data...</div>
  }
  const collection = collections.map(ele => (
    <Collections collection={ele}></Collections>
  ))

  return (
    <div className={`${styles.collectionMainContainer} ${styles.flexRow}`}>
      {/* <Collections collection={collection}></Collections>
      <Collections collection={collection}></Collections>
      <Collections collection={collection}></Collections>
      <Collections collection={collection}></Collections>
      <Collections collection={collection}></Collections> */}
      {collection}
    </div>
  )
}

export default CollectionSection
