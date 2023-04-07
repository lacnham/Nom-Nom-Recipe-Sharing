const ClickChangeStyle = (current, set, style) => {
  // const styleElement = {
  //   default: 'none',
  //   change: 'block'
  // }

  const handleClick = () => {
    let newStyle
    if (current == style.default) {
      newStyle = style.change
      console.log(1)
    } else {
      newStyle = style.default
      console.log(2)
    }

    set(newStyle)
  }
  return handleClick
}

export default ClickChangeStyle
