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
        <img src={nomNomLogo} alt="nom-nom-logo" />
      </div>
      <nav className={`${styles.navBar} ${styles.flexItemCenter}`}>
        <ul className={`${styles.flexItemCenter}`}>{items}</ul>
      </nav>
      <div className={`${styles.profileContainer} ${styles.flexItemCenter}`}>
        <div className={styles.loginSignup}>
          <Button1 type={'button'} options={'Login'} fn={''}></Button1>
          <Button2 type={'button'} options={'Register'} fn={''}></Button2>
        </div>
      </div>
    </header>
  )
}

export default Header
