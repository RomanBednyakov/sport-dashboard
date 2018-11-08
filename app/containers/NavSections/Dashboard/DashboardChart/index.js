import React from "react";
import "./dashboardChart.scss";
import NumberFormat from "react-number-format";
import { connect } from "react-redux";
import chroma from "chroma-js";
import { activeFacilityArray } from "../../../../redux/action/facilityActive";

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
      chartElem = this.props.facilityActive.activeFacilityArray.map(item => {
        const num = String(item.count / (item.count + 100)).slice(2, 4);
        let scale = chroma.scale(["white", item.color]);
        return (
          <div key={item.name} className="chart_dashboard_elem bla1">
            <div
              style={{
                backgroundColor: `${scale(0.5).hex()}`
              }}
              className="chart_dashboard_elem_bg"
            >
              <div
                style={{
                  height: `${Number(num) || 0}%`,
                  backgroundColor: `${item.color}`
                }}
                className="chart_dashboard_elem_block_count"
              >
                <span
                  className={
                    Number(num) > 10
                      ? "chart_dashboard_elem_count"
                      : "chart_dashboard_elem_count zero_count"
                  }
                >
                  <NumberFormat
                    value={item.count}
                    displayType={"text"}
                    thousandSeparator={true}
                  />
                </span>
              </div>
            </div>
            <div className="chart_dashboard_elem-title">{item.name}</div>
          </div>
        );
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
