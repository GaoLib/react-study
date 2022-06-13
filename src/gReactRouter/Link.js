function Link({to, children, ...rest}) {
  const handle = (e) => {
    e.preventDefault()
  }
  return (
    <a href={to} {...rest} onClick={handle}>{ children }</a>
  )
}

export default Link