export default function combineReducers(reducers) {
  return function combination(state = {}, action) {
    let newState = {}
    let hasChanged = false
    for (let key in reducers) {
      const reducer = reducers[key]
      newState[key] = reducer(state[key], action)
      hasChanged = hasChanged || newState !== state[key]
    }
    return hasChanged ? newState : state
  }
}