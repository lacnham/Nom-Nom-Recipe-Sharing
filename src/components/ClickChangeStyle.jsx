const ClickChangeStyle = (current, set, style) => {
  // const styleElement = {
  //   default: 'none',
  //   change: 'block'
  // }

  const handleClick = () => {
    let newStyle
    if (current == style.default) {
      newStyle = style.change
    } else {
      newStyle = style.default
    }

    set(newStyle)
  }
  return handleClick
}

export default ClickChangeStyle
