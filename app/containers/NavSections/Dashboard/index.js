import React from "react";
import "./dashboard.scss";
import DashboardInfo from "./DashboardInfo/";
import { connect } from "react-redux";
import {
  getFacilityToday,
  getFacilitySelectDate
} from "../../../redux/action/facility";

const mapStateToProps = ({ facility }) => ({
  facility
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
  // shouldComponentUpdate(nextProps) {
  //   if (
  //     nextProps.facilityActiveId &&
  //     nextProps.facilityActiveId !== this.props.facilityActiveId &&
  //     !nextProps.startDay
  //   ) {
  //     nextProps.getFacilityToday(nextProps.facilityActiveId);
  //     return true;
  //     // if (!nextProps.startDay) {
  //     //   nextProps.getFacilityToday(nextProps.facilityActiveId);
  //     //   return true;
  //     // }
  //   }
  //   if (nextProps.facilityActiveId && nextProps.startDay) {
  //     if (this.props.startDay === nextProps.startDay) {
  //       if (this.props.endDay !== nextProps.endDay) {
  //         nextProps.getFacilitySelectDate(
  //           nextProps.facilityActiveId,
  //           nextProps.startDay,
  //           nextProps.endDay
  //         );
  //         return true;
  //       }
  //     } else if (this.props.startDay === null) {
  //       nextProps.getFacilitySelectDate(
  //         nextProps.facilityActiveId,
  //         nextProps.startDay,
  //         nextProps.endDay
  //       );
  //       return true;
  //     } else if (this.props.startDay !== nextProps.startDay) {
  //       nextProps.getFacilitySelectDate(
  //         nextProps.facilityActiveId,
  //         nextProps.startDay,
  //         nextProps.endDay
  //       );
  //       return true;
  //     }
  //     if (nextProps.facilityActiveId !== this.props.facilityActiveId) {
  //       nextProps.getFacilitySelectDate(
  //         nextProps.facilityActiveId,
  //         nextProps.startDay,
  //         nextProps.endDay
  //       );
  //       return true;
  //     }
  //   }
  //   return nextProps.facility.facilityDate !== this.props.facility.facilityDate;
  // }
  render() {
    console.log(this.props.facility);
    return (
      <div className="dashboard">
        <div className="dashboard_blog">
          <div className="dashboard_blog-buttons">buttons</div>
          <DashboardInfo facilityActive={this.props.facilityActive} />
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
