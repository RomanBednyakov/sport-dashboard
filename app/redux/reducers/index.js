import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import login from "./login";
import facility from "./facility";
import facilityFilter from "./facilityFilter";

const rootReducer = combineReducers({
  login,
  facility,
  facilityFilter,
  routing: routerReducer
});

export default rootReducer;
