"use client";

import {
  createTheme,
  Theme,
  ThemeOptions,
  ThemeProviderProps,
  TypographyVariantsOptions,
} from "@mui/material/styles";

import theme from "../scss/_theme.module.scss";
import Palette from "./palette";
import { MenuOrientation, PresetColor, ThemeDirection } from "@/types/config";
import { ReactElement, ReactNode, useMemo } from "react";
import customShadows from "./shadows";
import { CustomShadowProps } from "@/types/default-theme";
import { ColorProps } from "@/types";

import colors from "../scss/_themes-vars.module.scss";
import theme1 from "@/scss/_theme.module.scss";
import Typography from "./typography";
import { Roboto } from "next/font/google";
import componentStyleOverrides from "./compStyleOverride";
import {
  NextAppDirEmotionCacheProvider,
  NextAppDirEmotionCacheProviderProps,
} from "./emotionCache";
import {
  CssBaseline,
  CssBaselineProps,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

interface Props {
  children: ReactElement;
}

export const presetColor: PresetColor = "theme";
export const borderRadius = 8;
export const fontFamily = roboto.style.fontFamily;
export const themeDirection = ThemeDirection.LTR;
export const color: ColorProps = theme1;
export const outlinedFilled = true;
export const menuOrientation = MenuOrientation.VERTICAL;
export const miniDrawer = false;
export const container = false;
// switch (presetColor) {
//   case "theme":
//     color = theme1;
//     break;
//   case "default":
//   default:
//     color = colors;
// }
// const useTheme = () => {
// const themes: Theme = createTheme({
//   components: {
//     MuiButton: {
//       styleOverrides: {
//         root: {
//           backgroundColor: "red",
//           textTransform: "none",
//           fontWeight: "500",
//           borderRadius: "4px",
//           display: "flex",
//           gap: "8px",
//           alignItems: "center",
//         },
//         contained: {
//           backgroundColor: "black",
//           color: "#fff",
//           "&:hover": {
//             backgroundColor: "#4B1A5F",
//           },
//         },
//         outlined: {
//           borderColor: "green",
//           color: "#6F2B8B",
//           "&:hover": {
//             backgroundColor: "rgba(111, 43, 139, 0.1)",
//           },
//         },
//         endIcon: {
//           margin: "0px !important",
//         },
//       },
//     },
//   },
// });

// return themes;
// };

// export default useTheme;

export default function ThemeCustomization({ children }: Props) {
  const theme: Theme = useMemo<Theme>(
    () => Palette(presetColor),
    [presetColor]
  );

  const themeTypography: TypographyVariantsOptions =
    useMemo<TypographyVariantsOptions>(
      () => Typography(theme, borderRadius, fontFamily),
      [theme, borderRadius, fontFamily]
    );

  const themeCustomShadows: CustomShadowProps = useMemo<CustomShadowProps>(
    () => customShadows(theme),
    [theme]
  );

  const themeOption = {
    colors: color,
    heading: "",
    paper: "",
    backgroundDefault: "",
    background: "",
    darkTextPrimary: "",
    darkTextSecondary: "",
    textDark: "",
    menuSelected: "",
    menuSelectedBack: "",
    divider: "",
  };

  themeOption.paper = color.paper;
  themeOption.backgroundDefault = color.paper;
  themeOption.background = color.primaryLight;
  themeOption.darkTextPrimary = color.grey700;
  themeOption.darkTextSecondary = color.grey500;
  themeOption.textDark = color.grey900;
  themeOption.menuSelected = color.secondaryDark;
  themeOption.menuSelectedBack = color.secondaryLight;
  themeOption.divider = color.grey200;
  themeOption.heading = color.grey900;

  const themeOptions: ThemeOptions = useMemo(
    () => ({
      direction: themeDirection,
      palette: theme.palette,
      mixins: {
        toolbar: {
          minHeight: "48px",
          padding: "16px",
          "@media (min-width: 600px)": {
            minHeight: "48px",
          },
        },
      },
      typography: themeTypography,
      customShadows: themeCustomShadows,
    }),
    [themeDirection, theme, themeCustomShadows, themeTypography]
  );

  const themes: Theme = createTheme(themeOptions);
  themes.components = useMemo(
    () => componentStyleOverrides(themes, borderRadius, outlinedFilled),
    [themes, borderRadius, outlinedFilled]
  );

  return (
    <StyledEngineProvider injectFirst>
      <NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
        <ThemeProvider theme={themes}>
          <CssBaseline enableColorScheme />
          {children}
        </ThemeProvider>
      </NextAppDirEmotionCacheProvider>
    </StyledEngineProvider>
  );
}
