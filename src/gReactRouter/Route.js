import React, { Component } from "react";
import matchPath from "./matchPath";
import RouterContext from "./RouterContext";

export default class Route extends Component {
  render() {
    return <RouterContext.Consumer>
      {(context) => {
        const location = context.location
        const { element } = this.props
        const match = matchPath(location.pathname || location.location.pathname, this.props)
        return match ? element : null
      }}
    </RouterContext.Consumer>
  }
}