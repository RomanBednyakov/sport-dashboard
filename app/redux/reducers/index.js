import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import login from "./login";
import facility from "./facility";
import facilityFilter from "./facilityFilter";
import facilityActive from "./facilityActive";

const rootReducer = combineReducers({
  login,
  facility,
  facilityFilter,
  facilityActive,
  routing: routerReducer
});

export default rootReducer;
