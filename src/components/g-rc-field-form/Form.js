import useForm from './useForm'
import FieldContext from './FieldContext'

function Form({ form, children }) {
  const [instance] = useForm(form)
  return <FieldContext.Provider value={instance}>
    {children}
  </FieldContext.Provider>
}

export default Form