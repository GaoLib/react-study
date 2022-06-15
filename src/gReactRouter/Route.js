import React, { Component } from "react";
import RouterContext from "./RouterContext";

export default class Route extends Component {
  render() {
    return <RouterContext.Consumer>
      {(context) => {
        const location = context.location
        const { path, element } = this.props
        const match = path === location.location.pathname
        return match ? element : null
      }}
    </RouterContext.Consumer>
  }
}