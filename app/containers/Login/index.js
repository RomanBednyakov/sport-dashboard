import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { loginUser } from "../../redux/action/login";
import "./login.scss";

const mapStateToProps = ({ login }) => ({
  login
});
const mapDispatchToProps = dispatch => ({
  loginUser: (login, password) => dispatch(loginUser(login, password))
});

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: "",
      password: ""
    };
  }
  handleLogin = event => {
    this.setState({ login: event.target.value });
  };
  handlePassword = event => {
    this.setState({ password: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.loginUser(this.state.login, this.state.password);
  };
  render() {
    if (this.props.login.isAuthenticated) {
      return <Redirect to="/" />;
    }
    return (
      <div className="login">
        <h1 className="form_title">Log in</h1>
        <form className="signIn-form">
          <input
            name="login"
            className="form_input"
            type="text"
            placeholder="username"
            onChange={this.handleLogin}
          />
          <input
            name="pass"
            type="text"
            className="form_input"
            placeholder="password"
            onChange={this.handlePassword}
          />
          <a className="button form_Button" onClick={this.handleSubmit}>
            Log In
          </a>
        </form>
        {this.props.errorLogin ? (
          <div className="form_error">Wrong login or password</div>
        ) : (
          ""
        )}
      </div>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
