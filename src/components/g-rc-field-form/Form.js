import React from 'react'
import useForm from './useForm'
import FieldContext from './FieldContext'

function Form({ form, children, onFinish, onFinishFailed }, ref) {
  const [instance] = useForm(form)
  instance.setCallbacks({ onFinish, onFinishFailed })
  React.useImperativeHandle(ref, () => instance);

  return <form onSubmit={(e) => {
    e.preventDefault()
    instance.submit()
  }}>
    <FieldContext.Provider value={instance}>
      {children}
    </FieldContext.Provider>
  </form>
}

export default Form