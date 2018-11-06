import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import login from "./login";
import facility from "./facility";

const rootReducer = combineReducers({
  login,
  facility,
  routing: routerReducer
});

export default rootReducer;
