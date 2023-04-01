import {
  LightMode as LightModeIcon,
  DarkMode as DarkModeIcon,
  SettingsBrightness as SystemModeIcon,
} from "@mui/icons-material";

import type { ThemeItem } from "../types";

/**
 * Theme Mode Items
 */
export const themeItems: ThemeItem[] = [
  { id: 0, name: 'light', mode: 'light', icon: <LightModeIcon /> },
  { id: 1, name: 'system', mode: 'system', icon: <SystemModeIcon /> },
  { id: 2, name: 'dark', mode: 'dark', icon: <DarkModeIcon /> },
];