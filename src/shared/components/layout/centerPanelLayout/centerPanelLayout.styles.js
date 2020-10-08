import styled from "styled-components";

import { Colors, Gradients, Radii, Typography } from "../../../../theme";

export const Container = styled.div`
  flex: 1;
  display: grid;
  grid-template-areas:
    ". . ."
    ". content ."
    ". . .";
`;

export const Content = styled.div`
  padding: 32px;
  border-radius: ${Radii.regular};
  grid-area: content;
  align-self: center;
  justify-self: center;
  width: 420px;
  background: ${Gradients.centerPanelBg};
`;

export const Title = styled.h3`
  ${Typography.h5};
  color: ${Colors.text.primary};
  margin-bottom: 32px;
  text-align: center;
`;

export const IconWrapper = styled.div`
  text-align: center;
  margin-bottom: 32px;
  color: ${({ theme }) => theme.color};
`;
