import React from "react";

import { Container, Content, Title } from "./centerPanelLayout.styles";

export const CenterPanelLayout = ({ children, title }) => {
  return (
    <Container>
      <Content>
        <Title>{title}</Title>

        {children}
      </Content>
    </Container>
  );
};
