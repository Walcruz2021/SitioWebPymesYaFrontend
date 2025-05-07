import { combineReducers } from "redux";
import reducer from "./reducer";
import reducerNewsPaper from "./reducerNewsPaper";

const rootReducer = combineReducers({
  reducer,
  reducerNewsPaper,
});

export default rootReducer;
