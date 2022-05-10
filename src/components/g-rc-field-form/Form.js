import useForm from './useForm'
import FieldContext from './FieldContext'

function Form({ form, children, onFinish, onFinishFailed }) {
  const [instance] = useForm(form)
  instance.setCallbacks({ onFinish, onFinishFailed })

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