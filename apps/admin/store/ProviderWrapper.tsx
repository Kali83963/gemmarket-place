"use client";

import { ReactElement, ReactNode } from "react";

// third-party
import { Provider } from "react-redux";
// import { PersistProvider } from "redux-persist/es/integration/react";
// project-import
// import Locales from "ui-component/Locales";
// import NavigationScroll from "layout/NavigationScroll";
// import RTLLayout from "ui-component/RTLLayout";
// import Snackbar from "ui-component/extended/Snackbar";
// import Notistack from "ui-component/third-party/Notistack";

import { persister, store } from "store";

import { JWTProvider as AuthProvider } from "contexts/JWTContext";
import { ThemeProvider } from "@mui/material";
import theme from "@/themes/theme";

export default function ProviderWrapper({
  children,
}: {
  children: ReactElement;
}) {
  console.log(theme);
  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persister}> */}
      {/* <RTLLayout> */}
      {/* <Locales> */}
      {/* <NavigationScroll> */}
      <ThemeProvider theme={theme}>
        <AuthProvider>
          {/* <Notistack> */}
          {/* <Snackbar /> */}
          {children}
          {/* </Notistack> */}
        </AuthProvider>
      </ThemeProvider>
      {/* </NavigationScroll> */}
      {/* </Locales> */}
      {/* </RTLLayout> */}
      {/* </PersistGate> */}
    </Provider>
  );
}
