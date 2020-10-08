import React from "react";
import { ThemeProvider } from "styled-components";
import { LoadingOutlined } from "@ant-design/icons";

import { SpinBase } from "./spin.styles";

export const Spin = ({ block, size, style }) => (
  <ThemeProvider theme={{ block }}>
    <SpinBase
      indicator={<LoadingOutlined style={{ ...style, fontSize: size }} spin />}
    />
  </ThemeProvider>
);

Spin.defaultProps = {
  size: 24,
  style: {},
};
