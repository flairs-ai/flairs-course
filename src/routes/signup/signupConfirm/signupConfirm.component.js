import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation, useRouteMatch } from "react-router";
import { Redirect } from "react-router-dom";
import queryString from "query-string";
import { FormattedMessage, useIntl } from "react-intl";

import Routes from "../../../config/routes";
import { promiseActions } from "../../../modules/auth";
import { MessageLayout } from "../../../shared/components/layout";

export const SignupConfirm = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const match = useRouteMatch();
  const history = useHistory();
  const intl = useIntl();
  const { token: queryToken } = queryString.parse(location.search);
  const { token } = location.state ?? {};

  useEffect(() => {
    (async () => {
      if (token) {
        try {
          await dispatch(promiseActions.signupConfirm({ token }));
          history.push(Routes.home);
        } catch {
          history.push(Routes.signup.confirmError);
        }
      }
    })();
  }, [dispatch, token, history]);

  if (queryToken) {
    return (
      <Redirect
        to={{
          pathname: match.url,
          state: { token: queryToken },
        }}
      />
    );
  }

  return (
    <MessageLayout
      title={intl.formatMessage({
        description: "Signup confirm / title",
        defaultMessage: "Confirming e-mail address...",
      })}
    >
      <FormattedMessage
        description="Signup confirm / copy"
        defaultMessage="You'll be redirected in a moment..."
      />
    </MessageLayout>
  );
};
