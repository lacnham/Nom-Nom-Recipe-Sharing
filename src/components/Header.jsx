import styles from "../styles/Header.module.css"
import nomNomLogo from "../images/NomNomHorizontalLogo.png"


const Header = () => {


        const tabList = [
            {key: 1, label: "Recipes", link: ""},
            {key: 2, label: "recipes", link: ""},
            {key: 3, label: "recipes", link: ""},
            {key: 4, label: "About us", link: ""}
        ]

        const items = tabList.map((tab) => 
            <li key={tab.key}>{tab.label}</li>
        )

    return(
        <header className={styles.header}>
            <div className={styles.logoContainer} typeof="image">
                <img src={nomNomLogo} alt="nom-nom-logo" />
            </div>
            <nav className={styles.navBar}>
                <ul>
                    {items}
                </ul>
            </nav>
            <div className={styles.profileContainer}>
                <div className={styles.loginSignup}>
                    <button className={styles.login}>Login</button>
                    <button className={styles.signup}>Signup</button>
                </div>
                
            </div>
        </header>
    );
}

export default Header