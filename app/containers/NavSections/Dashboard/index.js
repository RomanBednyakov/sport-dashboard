import React from "react";
import "./dashboard.scss";
import DashboardInfo from "./DashboardInfo/";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // facilityActive: this.props.facilityActive
    };
  }
  render() {
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
export default Dashboard;
