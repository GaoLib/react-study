import React, { useCallback, useContext, useLayoutEffect, useState } from 'react'

const Context = React.createContext()

export function Provider({ store, children }) {
  return <Context.Provider value={store}>
    {children}
  </Context.Provider>
}

function useForceUpdate() {
  const [, setState] = useState(0)
  const update = useCallback(() => {
    setState((prev) => prev + 1)
  }, [])
  return update
}

export const connect = (mapStateToProps, mapDispatchToProps) => (
  WarpperComponent
) => (props) => {
  const store = useContext(Context)
  const stateProps = mapStateToProps(store.getState())
  let dispatchProps = { dispatch: store.dispatch }

  if (typeof mapDispatchToProps === 'function') {
    dispatchProps = mapDispatchToProps(store.dispatch)
  } else if (typeof mapDispatchToProps === 'object') {
    dispatchProps = bindActionCreators(mapDispatchToProps, store.dispatch)
  }

  const forceUpdate = useForceUpdate()
  useLayoutEffect(() => {
    const unsubscribe = store.subscribe(() => {
      forceUpdate()
    })

    return () => {
      unsubscribe()
    }
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