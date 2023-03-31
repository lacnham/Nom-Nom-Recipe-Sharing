import styles from '../styles/Header.module.css'
import nomNomLogo from '../images/NomNomHorizontalLogo.png'
import { Button1, Button2 } from './Button'

const Header = () => {
  const tabList = [
    { key: 1, label: 'Recipes', link: '' },
    { key: 2, label: 'recipes', link: '' },
    { key: 3, label: 'recipes', link: '' },
    { key: 4, label: 'About us', link: '' }
  ]

  const items = tabList.map(tab => <li key={tab.key}>{tab.label}</li>)

  return (
    <header className={`${styles.header} ${styles.flexRow}`}>
      <div
        className={`${styles.logoContainer} ${styles.flexItemCenter}`}
        typeof="image"
      >
        <a href="/">
          <img src={nomNomLogo} alt="nom-nom-logo" />
        </a>
      </div>
      <nav className={`${styles.navBar} ${styles.flexItemCenter}`}>
        <ul className={`${styles.flexItemCenter}`}>{items}</ul>
      </nav>
      <div className={`${styles.profileContainer} ${styles.flexItemCenter}`}>
        <div className={styles.loginSignup}>
          <a href="/Login">
            <Button1 type={'button'} options={'Login'} fn={''}></Button1>
          </a>
          <a href="/SignUp">
            <Button2 type={'button'} options={'Register'} fn={''}></Button2>
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
