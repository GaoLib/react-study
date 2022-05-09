import React from 'react'

class FormStore {
  constructor() {
    this.store = {}
    this.fieldEntities = []
  }

  // 注册 Field 组件
  registerFieldEntities = (entity) => {
    this.fieldEntities.push(entity)
    return () => {
      this.fieldEntities = this.fieldEntities.filter(en => en !== entity)
      delete this.store[entity.props.name]
    }
  }

  getFieldsValue = () => {
    return {...this.store}
  }

  getFieldValue = (name) => {
    return this.store[name]
  }

  setFieldsValue = (newStore) => {
    // 1. 修改 store 值
    this.store = {
      ...this.store,
      ...newStore
    }
    // 2. 更新组件
    this.fieldEntities.forEach(entity => {
      Object.keys(newStore).forEach(k => {
        if (k === entity.props.name) {
          entity.onStoreChange()
        }
      })
    })
  }

  getForm = () => {
    return {
      getFieldsValue: this.getFieldsValue,
      getFieldValue: this.getFieldValue,
      setFieldsValue: this.setFieldsValue,
      registerFieldEntities: this.registerFieldEntities,
    }
  }
}


export default function useForm(form) {
  const formRef = React.useRef()
  if (!formRef.current) {
    if (form) {
      formRef.current = form
    } else {
      const formStore = new FormStore()
      formRef.current = formStore.getForm()
    }
  }
  
  return [formRef.current]
}