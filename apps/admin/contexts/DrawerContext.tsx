// DrawerContext.tsx
import React, { createContext, useContext } from "react";

type DrawerContextType = {
  handleDrawerClose: () => void;
};

export const DrawerContext = createContext<DrawerContextType | undefined>(
  undefined
);

export const useDrawer = () => {
  const context = useContext(DrawerContext);
  if (!context) {
    throw new Error("useDrawer must be used within a DrawerProvider");
  }
  return context;
};
