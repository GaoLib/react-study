import React, { Component } from "react";

export default class Route extends Component {
  render() {
    const { path, element } = this.props
    const match = path === window.location.pathname
    return match ? element : null
  }
}