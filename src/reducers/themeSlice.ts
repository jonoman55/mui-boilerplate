import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';
import { ThemeMode } from '../types';

/**
 * Theme Slice Name Type
 */
type Name = 'theme';

/**
 * Theme Slice Name
 */
const name: Name = 'theme';

/**
 * Theme Slice Actions
 */
type ThemeActions = {
  /**
   * Switch Theme Action
   */
  switchThemeMode: (state: ThemeState) => void;
  /**
   * Set Theme Mode Action
   */
  setThemeMode: (state: ThemeState, action: PayloadAction<ThemeMode>) => void;
};

/**
 * Theme Slice Type
 */
type ThemeSlice = Slice<ThemeState, ThemeActions, Name>;

/**
 * Get System Preference Theme
 * @returns true or false
 */
const getSystemPreference = (): boolean => {
  return window?.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches;
};

/**
 * Get Active Theme Mode 
 * 
 * Gets the theme from the browsers localStorage or system preferences
 * @returns true or false
 */
const getActiveTheme = (): boolean => {
  const theme = JSON.parse(localStorage.getItem(name) ?? '{}');
  if (typeof theme === 'object') {
    return getSystemPreference();
  }
  return Boolean(theme);
};

/**
 * Theme State
 */
type ThemeState = {
  /**
   * Dark Theme Mode State
   */
  darkMode: boolean;
  /**
   * Theme Mode State
   */
  themeMode: ThemeMode;
};

/**
 * Dark Theme (Theme Mode)
 */
const darkMode: boolean = getActiveTheme();

/**
 * Get Active Theme Mode
 */
const getThemeMode = (): ThemeMode => {
  if (getSystemPreference()) {
    return 'system';
  }
  return darkMode ? 'dark' : 'light';
};

/**
 * Theme Mode
 */
const themeMode: ThemeMode = getThemeMode();

/**
 * Initial Theme State
 */
const initialState: ThemeState = {
  darkMode,
  themeMode,
} as ThemeState;

/**
 * Theme Slice Reducers
 */
const reducers: ThemeActions = {
  /**
   * Switch Theme Action
   */
  switchThemeMode: (state: ThemeState) => {
    state.darkMode = !state.darkMode;
    localStorage.setItem(
      name,
      state.darkMode.toString()
    );
  },
  /**
   * Set Theme Mode 
   */
  setThemeMode: (state: ThemeState, action: PayloadAction<ThemeMode>) => {
    state.themeMode = action.payload;
  },
};

/**
 * Theme Slice
 */
export const themeSlice: ThemeSlice = createSlice({
  name,
  initialState,
  reducers
});

/**
 * Theme Slice Reducer and Actions 
 */
const { reducer, actions } = themeSlice;
/**
 * Theme Actions
 */
export const themeActions = actions;
/**
 * Theme Reducer
 */
export default reducer;