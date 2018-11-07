import React from "react";
import "./dashboardButtons.scss";
import FilterBtn from "./FilterBtn";

class DashboardButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.facilityButtonsActive = [];
  }
  activeButtons = (item, flag) => {
    let bla = [];
    if (flag) {
      this.facilityButtonsActive.push(item);
    } else {
      bla = this.facilityButtonsActive.filter(btn => {
        console.log(btn !== item);
        return btn !== item;
      });
      this.facilityButtonsActive = bla;
    }
    console.log(this.facilityButtonsActive);
  };
  render() {
    this.facilityButtonsActive = [];
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
export default DashboardButtons;
