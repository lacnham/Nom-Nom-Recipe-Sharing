import Header from '../components/Header';
import styles from '../styles/UserProfile/UserProfileMainPage.module.css'

const UserProfileMainPage = () => {
    return(
        <>
        <Header/>
        <div className={`${styles.body}`}>
            <div className={`${styles.flexRow} ${styles.profileMainContainer}`}>
                {/* Section container fixed width, height fit content, display grid 3 */}
                {/* UserProfileContainer fixed width */}
            </div>
        </div>
        </>
        
    );
}

export default UserProfileMainPage