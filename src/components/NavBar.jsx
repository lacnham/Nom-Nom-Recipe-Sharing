import styles from "../styles/Header.module.css"
import { DefaultButton } from "./Button";
import RenderLabel from "./RecipeDetailPageComponents/RecipeDetailSection/RenderLabel";

const NavBar = () => {

    const tabList = [
        { key: 1, name: 'Recipes', link: '' },
        { key: 2, name: 'recipes', link: '' },
        { key: 3, name: 'recipes', link: '' },
        { key: 4, name: 'About us', link: '' }
    ]
    // export function DefaultButton({fn, options, type, style, className})
    const style = {
        backgroundColor:"",
        color: 'black',
        backgroundColorHover: 'rgba(255, 196, 131, 1)',
        colorHover: 'white'
    }

    const items = tabList.map(tab => 
    <li key={tab.key}>
        <DefaultButton 
        options={tab.name} 
        type={'button'} 
        style={style} 
        className={''}
        fn={''}/>
    </li>
    )
    

    return(
        <>
        <nav className={`${styles.navBar} ${styles.flexItemCenter}`}>
            <ul className={`${styles.flexItemCenter}`}>{items}</ul>
            {/* TODO Make items clickable */}
        </nav>
      </>
    );
}

export default NavBar;