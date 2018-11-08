import React from "react";
import "./dashboardButtons.scss";
import FilterBtn from "./FilterBtn";
import { connect } from "react-redux";
import { activeFacilityArray } from "../../../../redux/action/facilityActive";

const mapStateToProps = ({ facility }) => ({
  facility
});

const mapDispatchToProps = dispatch => ({
  activeFacilityArray: arrayActive => dispatch(activeFacilityArray(arrayActive))
});

class DashboardButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.facilityButtonsActive = [];
  }
  activeButtons = (item, flag) => {
    let newArrayActive = [];
    if (flag) {
      this.facilityButtonsActive.push(item);
    } else {
      newArrayActive = this.facilityButtonsActive.filter(btn => {
        return btn !== item;
      });
      this.facilityButtonsActive = newArrayActive;
    }
    this.props.activeFacilityArray(this.facilityButtonsActive);
  };
  render() {
    this.facilityButtonsActive = [];
    if (this.facilityButtonsActive.length === 0) {
      this.props.activeFacilityArray(this.facilityButtonsActive);
    }
    const buttons = this.props.facilityBtn;
    let arrButtons = "";
    if (buttons.length > 0) {
      arrButtons = buttons.map(item => {
        return (
          <FilterBtn
            key={item.name}
            item={item}
            facilityButtonsActive={this.facilityButtonsActive}
            activeButtons={this.activeButtons}
          />
        );
      });
    }
    return <React.Fragment>{arrButtons}</React.Fragment>;
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardButtons);
