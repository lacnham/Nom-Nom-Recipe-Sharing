import styles from '../../../styles/UserProfile/UserProfileMainPage.module.css'
import Collections from './Collections'
import img from '../../../images/recipeImage.png'
import { FetchUserCollections } from './FetchUserCollections'
import { useContext, useState } from 'react'
import { AuthContext } from '../../SessionVerification/AuthContext'
// import { CollectionContext } from './UserCollectionContext'

const CollectionSection = props => {
  // const collection = {
  //   title: 'tet',
  //   description: 'lorem',
  //   img: img
  // }

  const { userCollectionData } = useContext(AuthContext)
  console.log('here:', userCollectionData)

  // const collections = FetchUserCollections()

  // console.log(collections)

  if (!userCollectionData) {
    return <div>Loading user data...</div>
  }

  // const style = {
  //   collection: props.display.collection,
  //   recipes: 'none'
  // }

  // const [display, setDisplay] = useState(style)

  const collection = userCollectionData.map(ele => (
    <Collections
      key={ele.collection_id}
      collection={ele}
      setCurrentStyle={props.setCurrentStyle}
      setUpdateForm={props.setUpdateForm}
      // setDisplay={setDisplay}
      // setSection={props.setSection}
    ></Collections>
  ))

  return (
    <div
      className={`${styles.collectionMainContainer} ${styles.flexRow}`}
      style={{ display: `${props.display.collection}` }}
    >
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
