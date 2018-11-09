import React from "react";
import "./dashboardChart.scss";
import { connect } from "react-redux";
import { activeFacilityArray } from "../../../../redux/action/facilityActive";
import ColumnChart from "./ColumnChart";

const mapStateToProps = ({ facilityActive }) => ({
  facilityActive
});

const mapDispatchToProps = dispatch => ({
  activeFacilityArray: arrayActive => dispatch(activeFacilityArray(arrayActive))
});

class DashboardChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let chartElem = "";
    if (this.props.facilityActive.activeFacilityArray.length > 0) {
      chartElem = this.props.facilityActive.activeFacilityArray.map(items => {
        return <ColumnChart key={items.name} item={items} />;
      });
    }
    return (
      <div
        className={
          this.props.facilityActive.activeFacilityArray.length > 0
            ? "chart_dashboard"
            : ""
        }
      >
        {chartElem}
      </div>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardChart);
