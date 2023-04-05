
import styles from '../../../styles/UserProfile/UserProfleCollection/CollectionDropList.module.css'

const CollectionDropList = () => {
    return(
        <div className={`${styles.listMainContainer} ${styles.flexColumn}`}>
            <div className={`${styles.searchBar}`}>
                {/* get input */}
                {/* check with user collections */}
            </div>
            <div className={`${styles.itemsContainer}`}>
                {/* display list of collections */}
                {/* height fit content */}
                {/* scrollable */}
                {/* max item 10 */}
            </div>
            <div className={`${styles.createNewCollections}`}>
                {/* click to display input field */}
                {/* input name */}
                {/* check collection existed */}
                {/* add to collections success */}
            </div>
        </div>
    );
}

export default CollectionDropList;