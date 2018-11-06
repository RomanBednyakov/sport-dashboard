import React from "react";
import Select, { components } from "react-select";
import "./selectFilter.scss";
import SVG from "react-inlinesvg";
import searchIcon from "../../assets/images/seacrch.svg";

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
  multiValueLabel: styles => ({
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

class SelectFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null
    };
  }
  handleChangeSelect = selectedOption => {
    this.props.selectFasility(selectedOption.id);
    this.setState({ selectedOption });
  };
  render() {
    const DropdownIndicator = props => {
      return (
        components.DropdownIndicator && (
          <components.DropdownIndicator {...props}>
            <span className="svgSelect">
              <SVG src={searchIcon} />
            </span>
          </components.DropdownIndicator>
        )
      );
    };
    return (
      <div className="app-wrapper-select">
        <Select
          value={this.state.selectedOption}
          components={{ DropdownIndicator }}
          onChange={this.handleChangeSelect}
          placeholder="Type Facility Name"
          hideSelectedOptions={false}
          styles={colourStyles}
          options={this.props.optionsFasility}
          classNamePrefix="my-select"
        />
      </div>
    );
  }
}

export default SelectFilter;
