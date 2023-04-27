import styles from '../../../../styles/UserProfile/UserProfleCollection/CollectionDropList.module.css'
import { DefaultButton } from '../../../Button'
import { useState } from 'react'
import ClickChangeStyle from '../../../ClickChangeStyle'
// import {
//   EnterToSubmit,
//   handleInputChange,
//   handleKeyDown
// } from '../../../EnterSubmit'

export const CreateNewCollection = () => {
  const style = {
    backgroundColor: 'transparent',
    backgroundColorHover: 'rgba(255, 196, 131, 1)'
  }

  const [currentDisplay, setCurrentDisplay] = useState('none')

  // let handleClick = props => {
  const styleElement = {
    default: 'none',
    change: 'block'
  }

  //   let newStyle
  //   if (currentDisplay == styleElement.default) {
  //     newStyle = styleElement.change
  //     console.log(1)
  //   } else {
  //     newStyle = styleElement.default
  //     console.log(2)
  //   }

  //   setCurrentDisplay(newStyle)
  // }

  let handleClick = ClickChangeStyle(
    currentDisplay,
    setCurrentDisplay,
    styleElement
  )

  const [value, setValue] = useState('')

  return (
    <>
      <div className={`${styles.createNewCollection}`}>
        <DefaultButton
          fn={handleClick}
          options="Create new collection"
          type="button"
          style={style}
          className={`${styles.button}`}
        />
      </div>

      <div
        className={`${styles.searchBar} ${styles.hiddenInputField}`}
        style={{ display: `${currentDisplay}` }}
      >
        <input
          value={value}
          className={`${styles.inputFieldContainer} `}
          // onKeyDown={handleKeyDown(value)}
          // onChange={handleInputChange(setValue)}
        />
      </div>
    </>
  )
}
