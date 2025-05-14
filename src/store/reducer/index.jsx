import { combineReducers } from "redux";
import reducer from "./reducer";
import reducerNewsPaper from "./reducerNewsPaper";
import reducerUser from "./reducerUser";
const rootReducer = combineReducers({
  reducer,
  reducerNewsPaper,
  reducerUser});

export default rootReducer;
