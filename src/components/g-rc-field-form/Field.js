import React, { useContext, useLayoutEffect, useReducer } from "react";
import FieldContext from "./FieldContext";

// class Field extends Component {

//   static contextType = FieldContext

//   onStoreChange = () => {
//     this.forceUpdate()
//   }

//   componentDidMount() {
//     this.unRegister = this.context.registerFieldEntities(this)
//   }

//   componentWillUnmount() {
//     if (this.unRegister) this.unRegister()
//   }

//   getControlled() {
//     const { getFieldValue, setFieldsValue } = this.context
//     const { name } = this.props
//     return {
//       value: getFieldValue(name),
//       onChange: (e) => {
//         const newValue = e.target.value
//         setFieldsValue({ [name]: newValue })
//       }
//     }
//   }

//   render() {
//     const { children } = this.props
//     return React.cloneElement(children, this.getControlled())
//   }
// }

// export default Field;

export default function Field(props) {
  const { children, name } = props
  const context = useContext(FieldContext)

  const [, forceUpdate] = useReducer((x) => x + 1, 0)

  useLayoutEffect(() => {
    const unRegister = context.registerFieldEntities({
      props,
      onStoreChange,
    })

    return () => {
      unRegister()
    }
  }, [])

  const onStoreChange = () => {
    forceUpdate()
  }

  const getControlled = () => {
    const { setFieldsValue, getFieldValue } = context
    return {
      value: getFieldValue(name),
      onChange: (e) => {
        const newValue = e.target.value
        setFieldsValue({[name]: newValue })
      }
    }
  }

  const returnChildNode = React.cloneElement(children, getControlled())
  return returnChildNode
}