import React from "react";
import "./dashboard.scss";
import DashboardInfo from "./DashboardInfo/";
import DashboardButtons from "./DashboardButtons/";
import { connect } from "react-redux";
import {
  getFacilityToday,
  getFacilitySelectDate
} from "../../../redux/action/facilityFilter";

const mapStateToProps = ({ facilityFilter }) => ({
  facilityFilter
});

const mapDispatchToProps = dispatch => ({
  getFacilityToday: id => dispatch(getFacilityToday(id)),
  getFacilitySelectDate: (id, startDay, endDay) =>
    dispatch(getFacilitySelectDate(id, startDay, endDay))
});

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const facility = this.props.facilityFilter;
    const facilityId = facility.facilityActive.id;
    const flag = facility.flagFilter;
    const activeFacility = facility.activeDateSelect;

    if (facilityId !== null) {
      if (flag) {
        if (facility.activeDateSelect) {
          this.props.getFacilitySelectDate(
            facilityId,
            activeFacility.startDay,
            activeFacility.endDay
          );
        } else {
          this.props.getFacilityToday(facilityId);
        }
      }
    }
    return (
      <div className="dashboard">
        <div className="dashboard_blog">
          <div className="dashboard_blog-buttons">
            <DashboardButtons facilityBtn={facility.facilityDate} />
          </div>
          <DashboardInfo facilityActive={facility.facilityActive} />
        </div>
        <div className="dashboard_chart">
          <div>chart</div>
        </div>
      </div>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
