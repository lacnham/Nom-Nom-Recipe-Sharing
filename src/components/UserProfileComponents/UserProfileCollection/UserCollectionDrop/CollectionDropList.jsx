import styles from '../../../../styles/UserProfile/UserProfleCollection/CollectionDropList.module.css'
import searchIcon from '../../../../images/Nom nom icons/Search_alt.svg'

import { CreateNewCollection } from './CreateNewCollection'
import { CollectionInDropList } from './CollectionInDropList'
import { FetchUserCollections } from '../FetchUserCollections'
const CollectionDropList = props => {
  const userCollections = FetchUserCollections()
  const collection = userCollections.map(ele => (
    <CollectionInDropList
      current={props.current}
      setCurrent={props.setCurrent}
      style={props.style}
      key={ele.collection_id}
      recipe={props.recipe}
      collection={ele}
    ></CollectionInDropList>
  ))

  return (
    <div
      className={`${styles.listMainContainer} ${styles.flexColumn}`}
      style={{ display: `${props.current}` }}
    >
      <div className={`${styles.searchBarAndCreateButtonContainer}`}>
        <div className={`${styles.searchBar} ${styles.flexRow}`}>
          <img
            className={`${styles.searchIconContainer}`}
            src={searchIcon}
          ></img>

          <input className={`${styles.inputFieldContainer}`} />
          {/* check with user collections */}
        </div>

        <CreateNewCollection></CreateNewCollection>
      </div>
      <div className={`${styles.itemsContainer}`}>{collection}</div>
    </div>
  )
}

export default CollectionDropList
