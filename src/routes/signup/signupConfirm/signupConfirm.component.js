import React from "react";
import { useLocation, useRouteMatch } from "react-router";
import { Redirect } from "react-router-dom";
import queryString from "query-string";
import { FormattedMessage, useIntl } from "react-intl";

import { MessageLayout } from "../../../shared/components/layout";

export const SignupConfirm = () => {
  const location = useLocation();
  const match = useRouteMatch();
  const intl = useIntl();
  const { token: queryToken } = queryString.parse(location.search);
  const { token } = location.state ?? {};

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
        defaultMessage="Token value: {token}"
        values={{ token }}
      />
    </MessageLayout>
  );
};
