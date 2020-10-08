import React from "react";
import { ThemeProvider } from "styled-components";

import {
  Container,
  Content,
  IconWrapper,
  Title,
} from "./centerPanelLayout.styles";

export const CenterPanelLayout = ({
  children,
  title,
  iconColor,
  IconComponent,
}) => {
  return (
    <Container>
      <Content>
        <Title>{title}</Title>

        {IconComponent && (
          <ThemeProvider theme={{ color: iconColor }}>
            <IconWrapper>
              <IconComponent style={{ fontSize: 48 }} />
            </IconWrapper>
          </ThemeProvider>
        )}

        {children}
      </Content>
    </Container>
  );
};
