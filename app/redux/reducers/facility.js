import {
  GET_FACILITY_ALL,
  GET_FACILITY_TODAY,
  GET_FACILITY_SELECT_DATE
} from "../../constants/ActionTypes";

const initial = {
  facilityArr: [],
  facilityDate: {},
  activeDateSelect: {}
};

const facility = (state = initial, action) => {
  // const { data } = action;
  switch (action.type) {
    case GET_FACILITY_ALL:
      return {
        ...state,
        facilityArr: action.facilityArr
      };
    case GET_FACILITY_TODAY:
      return {
        ...state,
        facilityDate: action.facilityDate
      };
    case GET_FACILITY_SELECT_DATE:
      return {
        ...state,
        facilityDate: action.facilityDate,
        activeDateSelect: action.activeDateSelect
      };
    default:
      return state;
  }
};
export default facility;
