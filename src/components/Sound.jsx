import React from 'react'
import soundfile from '/hinhtraitim.mp3'

const Sound = () => {
  return (
    <>
      <audio src={soundfile} autoPlay loop controls />
    </>
  )
}

export default Sound
