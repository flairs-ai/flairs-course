import React from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { CloseCircleOutlined } from "@ant-design/icons";

import { Colors } from "../../../theme";
import { MessageLayout } from "../../../shared/components/layout";

export const SignupConfirmError = () => {
  const intl = useIntl();

  return (
    <MessageLayout
      title={intl.formatMessage({
        description: "signup confirm error / title",
        defaultMessage: "Failed to confirm the e-mail",
      })}
      iconColor={Colors.text.error}
      IconComponent={CloseCircleOutlined}
    >
      <FormattedMessage
        description="Signup error / copy"
        defaultMessage="The verification link is invalid. Make sure that you haven't used it already."
      />
    </MessageLayout>
  );
};
