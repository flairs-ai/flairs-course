import React from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { CheckCircleOutlined } from "@ant-design/icons";

import { Colors } from "../../../theme";
import { MessageLayout } from "../../../shared/components/layout";

export const SignupSuccess = () => {
  const intl = useIntl();

  return (
    <MessageLayout
      title={intl.formatMessage({
        description: "Signup success / title",
        defaultMessage: "You've successfully signed up!",
      })}
      iconColor={Colors.primary}
      IconComponent={CheckCircleOutlined}
    >
      <FormattedMessage
        description="Signup success / copy"
        defaultMessage="We've sent you a confirmation e-mail. Check your spam if you haven't received it yet."
      />
    </MessageLayout>
  );
};
