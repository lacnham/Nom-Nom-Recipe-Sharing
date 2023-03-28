import React from 'react'
import soundfile from '/hinhtraitim.mp3'
import styles from "../styles/Sound.module.css"

const Sound = () => {
  return (
    <div className={styles.container}>
      <audio src={soundfile} autoPlay loop controls />
    </div>
  )
}

export default Sound
