import React, { Component } from "react";
import FieldContext from "./FieldContext";

class Field extends Component {

  static contextType = FieldContext

  onStoreChange = () => {
    this.forceUpdate()
  }

  componentDidMount() {
    this.context.registerFieldEntities(this)
  }

  getControlled() {
    const { getFieldValue, setFieldsValue } = this.context
    const { name } = this.props
    return {
      value: getFieldValue(name),
      onChange: (e) => {
        const newValue = e.target.value
        setFieldsValue({ [name]: newValue })
      }
    }
  }

  render() {
    const { children } = this.props
    return React.cloneElement(children, this.getControlled())
  }
}

export default Field;