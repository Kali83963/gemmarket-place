import { useMemo, ReactNode } from "react";

// material-ui
import CssBaseline from "@mui/material/CssBaseline";
import {
  alpha,
  createTheme,
  ThemeOptions,
  ThemeProvider,
  Theme,
  TypographyVariantsOptions,
  StyledEngineProvider,
} from "@mui/material/styles";

// project import
import { NextAppDirEmotionCacheProvider } from "./emotionCache";
import Palette from "./palette";
import Typography from "./typography";

import componentStyleOverrides from "./compStyleOverride";
import customShadows from "./shadows";

// assets
import colors from "../scss/_themes-vars.module.scss";
import theme1 from "../scss/_theme.module.scss";

// types
import { CustomShadowProps } from "@/types/default-theme";
import { ColorProps } from "@/types";
import useConfig from "@/hooks/useConfig";

interface Props {
  children: ReactNode;
}

export default function ThemeCustomization({ children }: Props) {
  const config = useConfig();
  const {
    borderRadius,
    fontFamily,
    mode,
    outlinedFilled,
    presetColor,
    themeDirection,
  } = useConfig();

  const theme: Theme = useMemo<Theme>(
    () => Palette(mode, presetColor),
    [mode, presetColor]
  );

  const themeTypography: TypographyVariantsOptions =
    useMemo<TypographyVariantsOptions>(
      () => Typography(theme, borderRadius, fontFamily),
      [theme, borderRadius, fontFamily]
    );
  const themeCustomShadows: CustomShadowProps = useMemo<CustomShadowProps>(
    () => customShadows(mode, theme),
    [mode, theme]
  );

  let color: ColorProps;
  switch (config.presetColor) {
    case "theme":
      color = theme1;
      break;
    case "default":
    default:
      color = colors;
  }

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
    customization: config,
  };

  switch (config.mode) {
    case "dark":
      themeOption.paper = color.darkLevel2;
      themeOption.backgroundDefault = color.darkPaper;
      themeOption.background = color.darkBackground;
      themeOption.darkTextPrimary = color.darkTextPrimary;
      themeOption.darkTextSecondary = color.darkTextSecondary;
      themeOption.textDark = color.darkTextPrimary;
      themeOption.menuSelected = color.darkSecondaryMain;
      themeOption.menuSelectedBack = alpha(color.darkSecondaryMain, 0.15);
      themeOption.divider = color.darkTextPrimary;
      themeOption.heading = color.darkTextTitle;
      break;
    case "light":
    default:
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
      break;
  }

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
