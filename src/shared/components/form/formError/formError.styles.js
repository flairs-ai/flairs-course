import styled from "styled-components";

import { Colors, Typography } from "../../../../theme";

export const Container = styled.div`
  ${Typography.body};

  color: ${Colors.text.error};
  margin-bottom: 16px;
  text-align: center;
`;

export const ErrorMessage = styled.p`
  margin: 0;
`;
