import { Spin as AntSpin } from "antd";
import styled, { css } from "styled-components";
import theme from "styled-theming";

import { Colors } from "../../../theme";

export const SpinBase = styled(AntSpin)`
  ${theme("block", {
    true: css`
      display: block;
      width: 100%;
    `,
  })}

  path {
    fill: ${Colors.primary};
  }
`;
