import styles from '../../../../styles/UserProfile/UserProfleCollection/CollectionDropList.module.css'
import searchIcon from '../../../../images/Nom nom icons/Search_alt.svg'

import { CreateNewCollection } from './CreateNewCollection'
import { CollectionInDropList } from './CollectionInDropList'
const CollectionDropList = props => {
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
      <div className={`${styles.itemsContainer}`}>
        <CollectionInDropList></CollectionInDropList>
        <CollectionInDropList></CollectionInDropList>
        <CollectionInDropList></CollectionInDropList>
        <CollectionInDropList></CollectionInDropList>
        <CollectionInDropList></CollectionInDropList>
        <CollectionInDropList></CollectionInDropList>
        <CollectionInDropList></CollectionInDropList>
        <CollectionInDropList></CollectionInDropList>
        <CollectionInDropList></CollectionInDropList>
        <CollectionInDropList></CollectionInDropList>
        <CollectionInDropList></CollectionInDropList>
        <CollectionInDropList></CollectionInDropList>
        <CollectionInDropList></CollectionInDropList>

        {/* display list of collections */}
        {/* height fit content */}
        {/* scrollable */}
        {/* max item 10 */}
      </div>
    </div>
  )
}

export default CollectionDropList
