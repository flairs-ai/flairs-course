import React from "react";
import { Route, Switch } from "react-router-dom";

import Routes from "../config/routes";
import { Home } from "./home";
import { Signup } from "./signup";

export default () => {
  return (
    <Switch>
      <Route exact path={Routes.home} component={Home} />

      <Route path={Routes.signup.index} component={Signup} />
    </Switch>
  );
};
