import React, { useContext, useEffect, useReducer } from 'react'

const Context = React.createContext()

export function Provider({ store, children }) {
  return <Context.Provider value={store}>
    {children}
  </Context.Provider>
}

export const connect = (mapStateToProps, mapDispatchToProps) => (
  WarpperComponent
) => (props) => {
  const store = useContext(Context)
  const stateProps = mapStateToProps(store.getState())
  const dispatchProps = { dispatch: store.dispatch }

  const [, forceUpdate] = useReducer((x) => x+1, 0)
  useEffect(() => {
    store.subscribe(() => {
      forceUpdate()
    })
  }, [store])

  return <WarpperComponent {...props} {...stateProps} {...dispatchProps} />
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