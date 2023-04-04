import styles from "../../../styles/UserProfile/UserProfileMainPage.module.css"
import Collections from "./Collections";


const CollectionSection = () => {
    return(
        <div className={`${styles.collectionMainContainer} ${styles.flexRow}`}>
            <Collections></Collections>
            <Collections></Collections>
            <Collections></Collections>
            <Collections></Collections>
        </div>
    );
}

export default CollectionSection;