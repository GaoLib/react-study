// import {createStore, applyMiddleware} from "redux";
import {createStore, applyMiddleware, combineReducer, thunk, logger, promise } from "../gRedux/";
// import thunk from "redux-thunk";
// import logger from "redux-logger";
// import promise from "redux-promise";

// 定义修改规则
function countReducer(state = 0, action) {
  switch (action.type) {
    case "ADD":
      return state + (action.payload || 1);
    case "MINUS":
      return state - (action.payload || 1);
    default:
      return state;
  }
}

// 创建一个数据仓库
const store = createStore(
  countReducer,
  // combineReducers({count: countReducer}),
  applyMiddleware(thunk, promise, logger)
);

export default store;
