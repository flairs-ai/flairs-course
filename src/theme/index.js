import { rgba } from "polished";

import * as colors from "./colors";

import * as typography from "./typography";

export const Typography = typography;

export const Colors = {
  primary: colors.springGreen,
  secondary: colors.turquoiseBlue,
  text: {
    primary: colors.white,
    secondary: rgba(colors.white, 0.7),
    tertiary: rgba(colors.white, 0.5),
    error: colors.hotPink,
  },
  background: {
    primary: colors.black,
    secondary: colors.codGray,
  },
  input: {
    background: colors.mineShaft,
    border: colors.gray,
  },
  button: {
    borderDisabled: colors.gray,
  },
};

export const Radii = {
  regular: "4px",
};

export const Gradients = {
  centerPanelBg: `linear-gradient(180deg, ${colors.codGray} 0%, ${rgba(
    colors.black,
    0
  )} 100% )`,
};
