import React from "react";
import "./dashboardChart.scss";
import NumberFormat from "react-number-format";
import chroma from "chroma-js";

class ColumnChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      didMount: false
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ didMount: true });
    }, 0);
  }
  render() {
    const item = this.props.item;
    const num = String(item.count / (item.count + 100)).slice(2, 4);
    let scale = chroma.scale(["white", item.color]);
    return (
      <div className="chart_dashboard_elem bla1">
        <div
          style={{
            backgroundColor: `${scale(0.5).hex()}`
          }}
          className="chart_dashboard_elem_bg"
        >
          <div
            style={{
              height: `${this.state.didMount ? Number(num) + "%" : 0}`,
              transition: "height 1s ease-out",
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
  }
}
export default ColumnChart;
