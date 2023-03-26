// DOCS : https://mui.com/material-ui/customization/theming/

import { type PaletteMode } from '@mui/material';
import { PaletteColor, ThemeOptions, CSSObject } from "@mui/material/styles";
import { TypographyOptions } from "@mui/material/styles/createTypography";

import type { CustomPalette } from "../types";

/**
 * MUI Styles Deceleration Override
 */
declare module '@mui/material/styles' {
  interface Theme {
    custom: {
      palette: {
        orange: string,
      }
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    custom?: {
      palette?: {
        orange?: string,
      }
    };
  }
}

/**
 * Light Mode Scrollbar Styles
 */
const scrollBodyLight: CSSObject = {
  scrollbarColor: '#ededed #d2d2d2',
  '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
    backgroundColor: '#d2d2d2',
  },
  '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
    borderRadius: 8,
    backgroundColor: '#959595',
    minHeight: 24,
    border: '3px solid #d2d2d2',
  },
  '&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus': {
    backgroundColor: '#ededed',
  },
  '&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active': {
    backgroundColor: '#ededed',
  },
  '&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover': {
    backgroundColor: '#ededed',
  },
  '&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner': {
    backgroundColor: '#d2d2d2',
  },
};

/**
 * Dark Mode Scrollbar Styles
 */
const scrollBodyDark: CSSObject = {
  scrollbarColor: '#6b6b6b #2b2b2b',
  '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
    backgroundColor: '#2b2b2b',
  },
  '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
    borderRadius: 8,
    backgroundColor: '#6b6b6b',
    minHeight: 24,
    border: '3px solid #2b2b2b',
  },
  '&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus': {
    backgroundColor: '#959595',
  },
  '&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active': {
    backgroundColor: '#959595',
  },
  '&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover': {
    backgroundColor: '#959595',
  },
  '&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner': {
    backgroundColor: '#2b2b2b',
  },
};

/**
 * MUI Light Mode Palette Colors
 */
const light: PaletteColor = {
  main: '#f2f2f2',
  light: '#ffffff',
  dark: '#bfbfbf',
  contrastText: '#000000',
};

/**
 * MUI Dark Mode Palette Colors
 */
const dark: PaletteColor = {
  main: '#424242',
  light: '#6d6d6d',
  dark: '#1b1b1b',
  contrastText: '#ffffff',
};

/**
 * MUI Custom Palette Colors
 */
const custom: CustomPalette = {
  palette: {
    orange: '#e25f22'
  }
};

/**
 * MUI Typography Options
 */
const typography: TypographyOptions = {
  fontFamily: [
    'Roboto',
    'sans-serif',
  ].join(','),
};

/**
 * Create MUI Theme Palette
 * @param mode PaletteMode
 * @returns ThemeOptions
 */
export const createPaletteMode = (mode: PaletteMode): ThemeOptions => ({
  palette: {
    mode,
    primary: mode === 'light' ? light : dark,
    secondary: mode === 'light' ? dark : light,
  },
  custom,
  typography,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: mode === 'light'
          ? scrollBodyLight
          : scrollBodyDark,
      },
    },
  },
});