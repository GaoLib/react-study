import React, { Component } from "react";

class Field extends Component {

  getControlled() {
    return {
      value: 'omg',
      onChange: (e) => {
        const newValue = e.target.value
        console.log(newValue)
      }
    }
  }

  render() {
    const { children } = this.props
    return React.cloneElement(children, this.getControlled())
  }
}

export default Field;