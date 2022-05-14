export default function createStore(reducer) {
  let currentState
  let currentListeners = []

  function getState() {
    return currentState
  }

  function dispatch(action) {
    currentState = reducer(currentState, action)
    currentListeners.forEach(listener => listener())
  }

  function subscribe(listener) {
    currentListeners.push(listener)
  }

  dispatch({type: 'REDUX_INIT'})

  return {
    getState,
    dispatch,
    subscribe,
  }
}