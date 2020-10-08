import styled, { css } from "styled-components";
import theme from "styled-theming";

import { Colors, Radii } from "../../../theme";
import { ButtonVariants } from "./button.constants";

export const Button = styled("button")`
  padding: 4px 16px;
  background: ${Colors.background.secondary};
  border-radius: ${Radii.regular};
  white-space: nowrap;
  text-align: center;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  user-select: none;
  touch-action: manipulation;
  border-style: solid;
  border-width: 1px;
  height: 40px;

  ${theme("block", {
    true: css`
      display: block;
      width: 100%;
    `,
  })};

  ${theme("variant", {
    [ButtonVariants.PRIMARY]: css`
      color: ${Colors.primary};
      border-color: ${Colors.primary};

      &:hover,
      &:focus {
        border-radius: ${Radii.regular};
        background: ${Colors.background.secondary};
        color: ${Colors.secondary};
        border-color: ${Colors.secondary};
      }

      ${({ disabled }) =>
        disabled
          ? css`
              color: ${Colors.text.secondary};
              border-color: ${Colors.button.borderDisabled};

              &:hover,
              &:focus {
                color: ${Colors.text.secondary};
                border-color: ${Colors.button.borderDisabled};
              }
            `
          : null};
    `,
  })};
`;
