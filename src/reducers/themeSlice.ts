import { createSlice, Slice } from '@reduxjs/toolkit';

/**
 * Theme Slice Name Type
 */
type Name = 'theme';

/**
 * Theme Slice Name
 */
const name: Name = 'theme';

/**
 * Toggle Theme Action Type
 */
type ThemeActions = {
  /**
   * Toggle Theme Action
   */
  switchThemeMode: (state: ThemeState) => void;
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
};

/**
 * Dark Theme (Theme Mode)
 */
const darkMode: boolean = getActiveTheme();

/**
 * Initial Theme State
 */
const initialState: ThemeState = {
  darkMode
} as ThemeState;

/**
 * Theme Slice Reducers
 */
const reducers: ThemeActions = {
  /**
   * Switch Theme Mode Action
   */
  switchThemeMode: (state: ThemeState) => {
    state.darkMode = !state.darkMode;
    localStorage.setItem(
      name,
      state.darkMode.toString()
    );
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