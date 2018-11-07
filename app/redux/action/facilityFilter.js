import {
  GET_FACILITY_TODAY,
  GET_FACILITY_SELECT_DATE,
  ADD_FACILITY_SELECT_DATE,
  ADD_SELECT_FACILITY
} from "../../constants/ActionTypes";
import api from "../../api/index";
import helpers from "../../helpers/index";
import helpersColor from "../../helpers/colorDashboardSelect";
import config from "../../config";

export function getFacilityToday(id) {
  return dispatch => {
    return api
      .get(`${config.baseUrl}/analytics/metrics/facility/${id}`)
      .then(helpers.checkStatus)
      .then(helpersColor.colorButtons)
      .then(response =>
        dispatch({
          type: GET_FACILITY_TODAY,
          facilityDate: response.data,
          flagFilter: false
        })
      )
      .catch(error => {
        console.log("error getFacilityAll", error);
      });
  };
}
export function getFacilitySelectDate(id, startDay, endDay) {
  return dispatch => {
    return api
      .get(
        `${
          config.baseUrl
        }/analytics/metricsByDate/facility/${id}/${startDay}/${endDay}`
      )
      .then(helpers.checkStatus)
      .then(helpersColor.colorButtons)
      .then(response =>
        dispatch({
          type: GET_FACILITY_SELECT_DATE,
          facilityDate: response.data,
          flagFilter: false
        })
      )
      .catch(error => {
        console.log("error getFacilityAll", error);
      });
  };
}
export function addFacilitySelectDate(start, end) {
  const selectDate = {
    startDay: start,
    endDay: end
  };
  return dispatch => {
    dispatch({
      type: ADD_FACILITY_SELECT_DATE,
      activeDateSelect: selectDate,
      flagFilter: true
    });
  };
}
export function addSelectFacility(id, active) {
  const selectDate = {
    id,
    active
  };
  return dispatch => {
    dispatch({
      type: ADD_SELECT_FACILITY,
      activeDateSelect: selectDate,
      flagFilter: true
    });
  };
}
