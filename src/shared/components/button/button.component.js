import React from "react";
import { ThemeProvider } from "styled-components";

import { Button as ButtonBase } from "./button.styles";
import { ButtonVariants } from "./button.constants";

export const Button = ({ variant, block, ...props }) => (
  <ThemeProvider theme={{ variant, block }}>
    <ButtonBase {...props} />
  </ThemeProvider>
);

Button.defaultProps = {
  variant: ButtonVariants.PRIMARY,
};
