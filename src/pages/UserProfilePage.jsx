import Header from '../components/Header';
import styles from '../styles/UserProfile/UserProfileMainPage.module.css'

const UserProfileMainPage = () => {
    return(
        <>
        <Header/>
        <div className={`${styles.body}`}>
            <div className={`${styles.flexRow} ${styles.profileMainContainer}`}></div>
        </div>
        </>
        
    );
}

export default UserProfileMainPage