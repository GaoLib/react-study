class FormStore {
  constructor() {
    this.store = {}
  }

  getFieldsValue = () => {
    return {...this.store}
  }

  getFieldValue = (name) => {
    return this.store[name]
  }

  setFieldsValue = (newStore) => {
    this.store = {
      ...this.store,
      ...newStore
    }
  }
}


export default function useForm() {
  return []
}