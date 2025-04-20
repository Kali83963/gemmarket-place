"use client";

import { createTheme } from "@mui/material/styles";

const useTheme = () => {
  const direction = "ltr";

  const theme = createTheme({
    direction,

    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
            fontWeight: "500",
            borderRadius: "4px",
            display: "flex",
            gap: "8px",
            alignItems: "center",
            contained: {
              backgroundColor: "#6F2B8B",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#4B1A5F",
              },
            },
            outlined: {
              borderColor: "#6F2B8B",
              color: "#6F2B8B",
              "&:hover": {
                backgroundColor: "rgba(111, 43, 139, 0.1)",
              },
            },
            endIcon: {
              margin: "0px !important",
            },
          },
        },
      },
    },
  });

  return theme;
};

export default useTheme;
