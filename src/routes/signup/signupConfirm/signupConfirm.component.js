import React from "react";
import { useLocation } from "react-router";
import queryString from "query-string";
import { FormattedMessage, useIntl } from "react-intl";

import { MessageLayout } from "../../../shared/components/layout";

export const SignupConfirm = () => {
  const location = useLocation();
  const intl = useIntl();
  const { token: queryToken } = queryString.parse(location.search);

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
        values={{ token: queryToken }}
      />
    </MessageLayout>
  );
};
