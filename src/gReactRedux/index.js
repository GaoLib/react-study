import React from 'react'

const Context = React.createContext()

export function Provider({ store, children }) {
  return <Context.Provider value={store}>
    {children}
  </Context.Provider>
}

export const connect = (mapStateToProps, mapDispatchToProps) => (
  WarpperComponent
) => (props) => {
  return <WarpperComponent />
}

function bindActionCreator(creator, dispatch) {
  return (...args) => dispatch(creator(...args))
}


export function bindActionCreators(creators, dispatch) {
  const obj = {}

  for (let key in creators) {
    obj[key] = bindActionCreator(creators[key], dispatch)
  }

  return obj
}