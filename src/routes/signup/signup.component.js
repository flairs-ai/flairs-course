import React from "react";
import { Switch, Route, useRouteMatch } from "react-router";

import Routes from "../../config/routes";
import { SignupForm } from "./signupForm";
import { SignupSuccess } from "./signupSuccess";
import { SignupConfirm } from "./signupConfirm";

export const Signup = () => {
  const routeMatch = useRouteMatch();

  return (
    <Switch>
      <Route exact path={routeMatch.url} component={SignupForm} />
      <Route exact path={Routes.signup.success} component={SignupSuccess} />
      <Route exact path={Routes.signup.confirm} component={SignupConfirm} />
    </Switch>
  );
};
