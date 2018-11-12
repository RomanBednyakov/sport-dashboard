import React from "react";
import Select, { components } from "react-select";
import { connect } from "react-redux";
import "./selectDate.scss";
import SVG from "react-inlinesvg";
import arrowIcon from "../../assets/images/icons/arrow.svg";
import calendarIcon from "../../assets/images/calendar.svg";
// import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import moment from "moment";
import { addFacilitySelectDate } from "../../redux/action/facilityFilter";

const mapStateToProps = ({ facilityFilter }) => ({
  facilityFilter
});

const mapDispatchToProps = dispatch => ({
  addFacilitySelectDate: (start, end) =>
    dispatch(addFacilitySelectDate(start, end))
});

const colourStyles = {
  control: styles => ({ ...styles, backgroundColor: "white" }),
  option: (styles, { data, isDisabled, isSelected, isFocused }) => {
    return {
      ...styles,
      backgroundColor: isDisabled
        ? null
        : isSelected
          ? "#d9dde0"
          : isFocused
            ? "#edf0f2"
            : null,
      color: isDisabled
        ? "#ccc"
        : isSelected
          ? "white"
            ? "black"
            : "black"
          : "black",
      ":before": {
        background: data.color
      }
    };
  },
  multiValue: (styles, { data }) => {
    return {
      ...styles,
      backgroundColor: "#edf0f2",
      paddingLeft: "5px",
      ":before": {
        background: data.color
      }
    };
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: "black"
  }),
  multiValueRemove: styles => ({
    ...styles,
    color: "#7a7a7a",
    ":hover": {
      color: "#040405",
      cursor: "pointer"
    }
  })
};
class SelectDate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: { value: "Today", label: "Today" },
      startDate: moment(),
      endDate: moment(),
      optionsSelect: [
        { value: "1 days", label: "1 days", valueName: "days", valueDate: 1 },
        { value: "7 days", label: "7 days", valueName: "days", valueDate: 7 },
        {
          value: "2 Weeks",
          label: "2 weeks",
          valueName: "weeks",
          valueDate: 2
        },
        {
          value: "1 month",
          label: "1 month",
          valueName: "month",
          valueDate: 1
        },
        {
          value: "2 month",
          label: "2 month",
          valueName: "month",
          valueDate: 2
        },
        { value: "Custom", label: "Custom" }
      ]
    };
  }
  handleChangeSelect = selectedOption => {
    const startDay = moment().format("MM-DD-YYYY");
    if (selectedOption.value !== "Custom") {
      if (selectedOption.valueName === "days") {
        this.props.addFacilitySelectDate(
          startDay,
          moment()
            .add(selectedOption.valueDate, "days")
            .format("MM-DD-YYYY")
        );
      } else if (selectedOption.valueName === "weeks") {
        this.props.addFacilitySelectDate(
          startDay,
          moment()
            .add(14, "days")
            .format("MM-DD-YYYY")
        );
      } else if (selectedOption.valueName === "month") {
        this.props.addFacilitySelectDate(
          startDay,
          moment()
            .add(selectedOption.valueDate, "M")
            .format("MM-DD-YYYY")
        );
      }
    }
    this.setState({ selectedOption });
  };
  handleChange = ({ startDate, endDate }) => {
    startDate = startDate || this.state.startDate;
    endDate = endDate || this.state.endDate;

    if (startDate.isAfter(endDate)) {
      endDate = startDate;
    }
    this.props.addFacilitySelectDate(
      startDate.format("MM-DD-YYYY"),
      endDate.format("MM-DD-YYYY")
    );
    this.setState({ startDate, endDate });
  };

  handleChangeStart = startDate => this.handleChange({ startDate });

  handleChangeEnd = endDate => this.handleChange({ endDate });

  render() {
    const DropdownIndicator = props => {
      return (
        components.DropdownIndicator && (
          <components.DropdownIndicator {...props}>
            <span className="svgselectDate">
              <SVG src={arrowIcon} />
            </span>
          </components.DropdownIndicator>
        )
      );
    };
    return (
      <div className="datePicker">
        <div className="datePicker-selectDate">
          <Select
            value={this.state.selectedOption}
            components={{ DropdownIndicator }}
            onChange={this.handleChangeSelect}
            placeholder="Today"
            hideSelectedOptions={false}
            isSearchable={false}
            styles={colourStyles}
            options={this.state.optionsSelect}
            classNamePrefix="my-selectDate"
          />
        </div>
        {this.state.selectedOption.value === "Custom" && (
          <div className="datePicker_block-start">
            <div className="datePicker_block-start-custom">
              <DatePicker
                selected={this.state.startDate}
                selectsStart
                dateFormat="MMM Do, YYYY"
                className="datePicker_block-start-custom-input"
                startDate={this.state.startDate}
                endDate={this.state.endDate}
                onChange={this.handleChangeStart}
              />
              <img
                className="datePicker_block-start-custom-img"
                src={calendarIcon}
                alt="calendarIcon"
              />
            </div>
            <div className="datePicker_block-start-custom">
              <DatePicker
                selected={this.state.endDate}
                selectsEnd
                dateFormat="MMM Do, YYYY"
                className="datePicker_block-end-custom-input"
                startDate={this.state.startDate}
                endDate={this.state.endDate}
                onChange={this.handleChangeEnd}
              />
              <img
                className="datePicker_block-start-custom-img"
                src={calendarIcon}
                alt="calendarIcon"
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectDate);
