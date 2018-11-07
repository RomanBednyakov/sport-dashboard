import React from "react";
import { Link, Route, Router, Switch } from "react-router-dom";
import "./app.scss";
// import { logoutUser } from "../../redux/action/login";
import SVG from "react-inlinesvg";
import SelectFilter from "../../components/SelectFilter";
import SelectDate from "../../components/SelectDate";
import nabTabs from "../../helpers/navTabs";
import logo from "../../assets/images/logo.svg";
import ball from "../../assets/images/ball.svg";
import messageImg from "../../assets/images/message.svg";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // logout = () => {
  //   this.props.logoutUser(true);
  // };
  render() {
    return (
      <div className="app-wrapper">
        <header className="header">
          <div className="header_logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="header_search">
            <SelectFilter />
          </div>
          <div className="header_date">
            <SelectDate />
          </div>
          <div className="header_notif">
            <img src={ball} alt="ball" />
            <span className="header_notif-title">Notifications</span>
          </div>
          <div className="header_message">
            <img src={messageImg} alt="message" />
            <span className="header_message-title">Messages</span>
          </div>
          <div className="header_avatar">
            <img src={messageImg} alt="avatar" />
          </div>
        </header>
        <div className="content">
          <nav className="nav">
            {nabTabs.navigationTabs.map(item => {
              return (
                <div
                  key={item.name}
                  className={
                    this.props.location.pathname === item.urlName
                      ? "activeNav"
                      : ""
                  }
                >
                  <Link className="nav-block" to={item.urlName}>
                    <SVG src={item.iconSvg} />
                    <span>{item.name}</span>
                  </Link>
                </div>
              );
            })}
          </nav>
          <div className="section">
            <Router history={this.props.history}>
              <Switch>
                {nabTabs.navigationTabs.map(item => {
                  return (
                    <Route
                      key={item.name}
                      path={item.urlName}
                      render={props => <item.comFile {...props} />}
                    />
                  );
                })}
              </Switch>
            </Router>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
