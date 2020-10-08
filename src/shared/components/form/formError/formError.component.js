import React from "react";

import { Container, ErrorMessage } from "./formError.styles";

export const FormError = ({ errors, ...rest }) => {
  const definedErrors = errors.filter((error) => !!error);

  if (definedErrors.length <= 0) {
    return null;
  }

  return (
    <Container {...rest}>
      {definedErrors.map((error, i) => (
        <ErrorMessage key={i}>{error}</ErrorMessage>
      ))}
    </Container>
  );
};
