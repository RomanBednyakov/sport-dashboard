import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./app.scss";
import { logoutUser } from "../../redux/action/login";

const mapStateToProps = ({ login }) => ({
  login
});
const mapDispatchToProps = dispatch => ({
  logoutUser: tokenFlag => dispatch(logoutUser(tokenFlag))
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  logout = () => {
    this.props.logoutUser(true);
  };
  render() {
    return (
      <div className="app-wrapper">
        <Link to="login" onClick={this.logout}>
          Logout
        </Link>
        <div>Dashboard</div>
        <div>Dashboard</div>
        <div>Dashboard</div>
        <div>Dashboard</div>
        <div>Dashboard</div>
      </div>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
