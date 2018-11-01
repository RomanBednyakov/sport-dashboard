import React from "react";
import Select, { components } from "react-select";
import "./selectDate.scss";
import SVG from "react-inlinesvg";
import arrowIcon from "../../assets/images/icons/arrow.svg";
import calendarIcon from "../../assets/images/calendar.svg";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";

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
        { value: "1 days", label: "1 days" },
        { value: "7 days", label: "7 days" },
        { value: "2 Weeks", label: "2 weeks" },
        { value: "1 month", label: "1 month" },
        { value: "2 month", label: "2 month" },
        { value: "Custom", label: "Custom" }
      ]
    };
  }
  handleChangeSelect = selectedOption => {
    // const hashMapFilter = {};
    // selectedOption.forEach(item => {
    //   hashMapFilter[item.value] = item;
    // });
    // this.props.filterTypeSelect(hashMapFilter);
    this.setState({ selectedOption });
  };
  handleChange = ({ startDate, endDate }) => {
    startDate = startDate || this.state.startDate;
    endDate = endDate || this.state.endDate;

    if (startDate.isAfter(endDate)) {
      endDate = startDate;
    }

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

export default SelectDate;
