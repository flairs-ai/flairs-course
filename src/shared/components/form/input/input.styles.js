import styled, { css } from "styled-components";
import { Input as AntInput } from "antd";

import { Colors, Radii, Typography } from "../../../../theme";

const inputStyles = css`
  ${Typography.input};

  border-width: 1px;
  border-style: solid;
  height: 40px;
  padding-left: 16px;
  padding-right: 16px;
  background: ${Colors.input.background};
  border-color: ${Colors.input.border};
  border-radius: ${Radii.regular};
  color: ${Colors.text.tertiary};

  &:hover,
  &:focus {
    border-color: ${Colors.primary};
  }
`;

export const Input = styled(AntInput)`
  ${inputStyles};
`;

Input.Password = styled(AntInput.Password)`
  ${inputStyles};

  input {
    background: ${Colors.input.background};
    color: ${Colors.text.tertiary};
  }

  .ant-input-suffix {
    path {
      fill: ${Colors.text.tertiary};
    }
  }
`;
