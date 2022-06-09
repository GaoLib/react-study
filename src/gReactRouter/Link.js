function Link({to, children, ...rest}) {
  return (
    <a href={to} {...rest}>{ children }</a>
  )
}

export default Link