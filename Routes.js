import React from "react";
import { Route, Switch, } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Welcome from "./components/Welcome";

export default () =>
  <Switch>
    <Route path="/login" exact component={Login} />
    <Route path="/register" exact component={Register}  />
    <Route path="/welcome" exact component={Welcome}  />
  </Switch>;