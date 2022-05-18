export default function combineReducers(reducers) {
  return function combination(state = {}, action) {
    let newState = {}
    let hasChanged = false
    for (let key in reducers) {
      const reducer = reducers[key]
      newState[key] = reducer(state[key], action)
      hasChanged = hasChanged || newState !== state[key]
    }
    // replaceRudecers 对象长度会改变，如 state: {a:1， b:2} -> newState {a: 1}
    hasChanged = hasChanged || Object.keys(state).length !== Object.keys(newState).length
    return hasChanged ? newState : state
  }
}