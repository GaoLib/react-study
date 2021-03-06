import isPromise from "is-promise";

// 解决异步
export function thunk({getState, dispatch}) {
  return (next) => (action) => {
    if (typeof action === "function") {
      return action(dispatch, getState);
    }
    return next(action);
  };
}

// logger 打印日志
export function logger({getState, dispatch}) {
  return (next) => (action) => {
    console.log("--------------------------"); //sy-log
    console.log(action.type + "执行了！"); //sy-log
    const prevState = getState();
    console.log("prev state", prevState); //sy-log

    const returnValue = next(action);
    const nextState = getState();

    console.log("next state", nextState); //sy-log

    console.log("--------------------------"); //sy-log

    return returnValue;
  };
}

export function promise({getState, dispatch}) {
  return (next) => (action) => {
    return isPromise(action) ? action.then(dispatch) : next(action);
  };
}