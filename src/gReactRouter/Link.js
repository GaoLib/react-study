import { useContext } from "react"
import RouterContext from "./RouterContext"

function Link({to, children, ...rest}) {
  const routerCtx = useContext(RouterContext)
  const handle = (e) => {
    e.preventDefault()
    console.log(routerCtx)
    routerCtx.push(to)
  }
  return (
    <a href={to} {...rest} onClick={handle}>{ children }</a>
  )
}

export default Link