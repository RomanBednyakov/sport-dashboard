import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
import MainContainer from "../containers/";
import Login from "../containers/Login";
import store from "./store";

const history = createBrowserHistory();
const Root = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" render={props => <MainContainer {...props} />} />
        </Switch>
      </Router>
    </Provider>
  );
};
export default Root;
