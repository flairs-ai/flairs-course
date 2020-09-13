import React from "react";
import { FormattedMessage } from "react-intl";

export const Home = () => {
  return (
    <div>
      <FormattedMessage
        description="home / info"
        defaultMessage="This is a home route"
      />
    </div>
  );
};
