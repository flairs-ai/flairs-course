import React from "react";
import { Switch, Route, useRouteMatch } from "react-router";

import { SignupForm } from "./signupForm";

export const Signup = () => {
  const routeMatch = useRouteMatch();

  return (
    <Switch>
      <Route exact path={routeMatch.url} component={SignupForm} />
    </Switch>
  );
};
