import { ACTIVE_FACILITY_ARRAY } from "../../constants/ActionTypes";

const initial = {
  activeFacilityArray: []
};

const facilityActive = (state = initial, action) => {
  // const { data } = action;
  switch (action.type) {
    case ACTIVE_FACILITY_ARRAY:
      return {
        ...state,
        activeFacilityArray: action.activeFacilityArray
      };
    default:
      return state;
  }
};
export default facilityActive;
