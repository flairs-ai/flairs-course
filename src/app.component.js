import React from "react";
import { IntlProvider } from "react-intl";

import enUsMessages from "./lang/en-US.json";
import AppRoutes from "./routes";

export const App = () => {
  return (
    <IntlProvider defaultLocale="en" locale="en" messages={enUsMessages}>
      <AppRoutes />
    </IntlProvider>
  );
};
