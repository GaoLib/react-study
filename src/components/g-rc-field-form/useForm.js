import React from 'react'

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

  getForm = () => {
    return {
      getFieldsValue: this.getFieldsValue,
      getFieldValue: this.getFieldValue,
      setFieldsValue: this.setFieldsValue,
    }
  }
}


export default function useForm() {
  const formRef = React.useRef()
  if (!formRef.current) {
    const formStore = new FormStore()
    formRef.current = formStore.getForm()
  }
  
  return [formRef.current]
}