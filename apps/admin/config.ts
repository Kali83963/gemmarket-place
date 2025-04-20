// third party
import { Roboto } from "next/font/google";
import {
  ConfigProps,
  MenuOrientation,
  ThemeDirection,
  ThemeMode,
} from "./types/config";

export const BASE_PATH = "";

export const DASHBOARD_PATH = "/dashboard/default";
export const HORIZONTAL_MAX_ITEM = 7;

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const config: ConfigProps = {
  menuOrientation: MenuOrientation.VERTICAL,
  miniDrawer: false,
  fontFamily: roboto.style.fontFamily,
  borderRadius: 8,
  outlinedFilled: true,
  mode: ThemeMode.LIGHT,
  presetColor: "default",
  i18n: "en",
  themeDirection: ThemeDirection.LTR,
  container: false,
};

export default config;
