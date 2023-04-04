import Header from '../components/Header';
import CollectionSection from '../components/UserProfileComponents/UserProfileCollection/CollectionSection';
import UserProfileSide from '../components/UserProfileComponents/UserProfileSide';
import styles from '../styles/UserProfile/UserProfileMainPage.module.css'

const UserProfileMainPage = () => {
    return(
        <>
        <Header/>
        <div className={`${styles.body}`}>
            <div className={`${styles.flexRow} ${styles.profileMainContainer}`}>
                {/* Section container fixed width, height fit content, display grid 3 */}
                <CollectionSection></CollectionSection>
                {/* UserProfileContainer fixed width */}
                <UserProfileSide></UserProfileSide>
            </div>
        </div>
        </>
        
    );
}

export default UserProfileMainPage