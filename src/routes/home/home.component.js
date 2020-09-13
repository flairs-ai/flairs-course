import React from "react";
import { FormattedMessage } from "react-intl";

import { Container } from "./home.styles";

export const Home = () => {
  return (
    <Container>
      <FormattedMessage
        description="home / info"
        defaultMessage="This is a home route"
      />
    </Container>
  );
};
