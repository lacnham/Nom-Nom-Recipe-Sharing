
import styles from '../../../styles/UserProfile/UserProfleCollection/CollectionDropList.module.css'
import searchIcon from '../../../images/Nom nom icons/Search_alt.svg'

import {DefaultButton} from "../../Button"
import { useState } from 'react'
const CollectionDropList = () => {


    const style = {
        backgroundColor: "transparent",
        backgroundColorHover: 'rgba(255, 196, 131, 1)',
    }
    

    // const [displayHidden, setDisplayHidden] = useState(temp.style.display)

    // const onClickDisplay = () => {
    //     const displayBlock = temp.style.display;
    //     displayBlock = "block"
    //     setDisplayHidden(displayBlock)       
    // }  
    return(
        <div className={`${styles.listMainContainer} ${styles.flexColumn}`}>
            <div className={`${styles.searchBarAndCreateButtonContainer}`}>
                <div className={`${styles.searchBar} ${styles.flexRow}`}>
                    {/* get input */}
                    <img className={`${styles.searchIconContainer}`} src={searchIcon}></img>
                    {/* <div className={`${styles.inputFieldContainer}`}> */}
                    <input className={`${styles.inputFieldContainer}`}/>
                    {/* check with user collections */}
                </div>
                <div className={`${styles.createNewCollection}`}>
                    {/* <button type="button">Create new collection</button> */}
                    {/* export function DefaultButton({fn, options, type, style, className}) { */}
                    <DefaultButton fn={``} options="Create new collection" type="button" style={style} className={`${styles.button}`}/>
                    
                    {/* click to display input field */}
                    {/* input name */}
                    {/* check collection existed */}
                    {/* add to collections success */}
                    
                </div>
                {/* <div className={`${styles.hiddenInputField}`}> */}
                {/* <div className={`${styles.searchBar} ${styles.hiddenInputField}`} id={displayHidden}> */}
                <div className={`${styles.searchBar} ${styles.hiddenInputField}`}>
                    <input className={`${styles.inputFieldContainer} `}/>
                </div>
                {/* <input className={`${styles.inputFieldContainer}`}/> */}
            </div>
            <div className={`${styles.itemsContainer}`}>
                {/* display list of collections */}
                {/* height fit content */}
                {/* scrollable */}
                {/* max item 10 */}
            </div>
            
        </div>
    );
}

export default CollectionDropList;