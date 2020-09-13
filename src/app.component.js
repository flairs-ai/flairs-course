import React from "react";
import { IntlProvider } from "react-intl";

import enUsMessages from "./lang/en-US.json";
import { AppLayout } from "./shared/components/layout";
import AppRoutes from "./routes";

export const App = () => {
  return (
    <IntlProvider defaultLocale="en" locale="en" messages={enUsMessages}>
      <AppLayout>
        <AppRoutes />
      </AppLayout>
    </IntlProvider>
  );
};
