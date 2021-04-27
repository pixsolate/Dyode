import { combineReducers } from "redux";
import layoutInfo from "./layout";

const appReducer = combineReducers({
  layoutInfo,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
