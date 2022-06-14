import { Component } from "react";
import RouterContext from "./RouterContext";

export default class Router extends Component {
  render() {
    return <RouterContext.Provider value={this.props.history}>
      {this.props.children}
    </RouterContext.Provider>
  }
}