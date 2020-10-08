import React from "react";

import { CenterPanelLayout } from "../centerPanelLayout";
import { Content } from "./messageLayout.styles";

export const MessageLayout = ({
  children,
  title,
  iconColor,
  IconComponent,
}) => {
  return (
    <CenterPanelLayout
      title={title}
      iconColor={iconColor}
      IconComponent={IconComponent}
    >
      <Content>{children}</Content>
    </CenterPanelLayout>
  );
};
