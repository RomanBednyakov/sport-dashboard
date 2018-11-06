import {
  GET_FACILITY_ALL,
  GET_FACILITY_TODAY,
  GET_FACILITY_SELECT_DATE
} from "../../constants/ActionTypes";
import api from "../../api/index";
import helpers from "../../helpers/index";
import config from "../../config";

export function getFacilityAll() {
  // console.log(username, password);
  // const data = {
  //   client_id: "mobile"
  // };
  // let formBody = [];
  // for (let property in data) {
  //   let encodedKey = encodeURIComponent(property);
  //   let encodedValue = encodeURIComponent(data[property]);
  //   formBody.push(encodedKey + "=" + encodedValue);
  // }
  // formBody = formBody.join("&");
  return dispatch => {
    return api
      .get(`${config.baseUrl}/facility/all`)
      .then(helpers.checkStatus)
      .then(response =>
        dispatch({
          type: GET_FACILITY_ALL,
          facilityArr: response.data
        })
      )
      .catch(error => {
        console.log("error getFacilityAll", error);
      });
  };
}

export function getFacilityToday(id) {
  return dispatch => {
    return api
      .get(`${config.baseUrl}/analytics/metrics/facility/${id}`)
      .then(helpers.checkStatus)
      .then(response =>
        dispatch({
          type: GET_FACILITY_TODAY,
          facilityDate: response.data
        })
      )
      .catch(error => {
        console.log("error getFacilityAll", error);
      });
  };
}
export function getFacilitySelectDate(id, startDay, endDay) {
  console.log(id, startDay, endDay);
  return dispatch => {
    return api
      .get(
        `${
          config.baseUrl
        }/analytics/metricsByDate/facility/${id}/${startDay}/${endDay}`
      )
      .then(helpers.checkStatus)
      .then(response =>
        dispatch({
          type: GET_FACILITY_SELECT_DATE,
          facilityDate: response.data
        })
      )
      .catch(error => {
        console.log("error getFacilityAll", error);
      });
  };
}