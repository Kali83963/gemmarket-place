"use client";

import { ReactElement, ReactNode } from "react";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
import { persister, store } from "store";

import { JWTProvider as AuthProvider } from "contexts/JWTContext";
import { ThemeProvider } from "@mui/material";
import NavigationScroll from "@/layout/NavigationScroll";
import useTheme from "@/theme";
import ThemeCustomization from "@/theme";

export default function ProviderWrapper({
  children,
}: {
  children: ReactElement;
}) {
  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persister}> */}
      <NavigationScroll>
        <ThemeCustomization>
          <AuthProvider>{children}</AuthProvider>
        </ThemeCustomization>
      </NavigationScroll>
      {/* </PersistGate> */}
    </Provider>
  );
}
