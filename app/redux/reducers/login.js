import {
  LOGINING,
  GET_REFRESH_TOKEN,
  GET_REFRESH_TOKEN_ERROR,
  LOGOUT
} from "../../constants/ActionTypes";

const initial = {
  isAuthenticated: null
};

const calendar = (state = initial, action) => {
  // const { data } = action;
  switch (action.type) {
    case LOGINING:
      return {
        ...state,
        isAuthenticated: action.isAuthenticated
      };
    case GET_REFRESH_TOKEN:
      return {
        ...state,
        isAuthenticated: action.isAuthenticated
      };
    case GET_REFRESH_TOKEN_ERROR:
      return {
        ...state,
        isAuthenticated: action.isAuthenticated
      };
    case LOGOUT:
      console.log("@", action.isAuthenticated);
      return {
        ...state,
        isAuthenticated: action.isAuthenticated
      };
    default:
      return state;
  }
};
export default calendar;
