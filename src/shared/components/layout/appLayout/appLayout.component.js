import React from "react";
import { createGlobalStyle } from "styled-components";
import { normalize } from "polished";

import { Container } from "./appLayout.styles";

const GlobalStyle = createGlobalStyle`${normalize()}`;

export const AppLayout = ({ children }) => {
  return (
    <Container>
      <GlobalStyle />
      {children}
    </Container>
  );
};
