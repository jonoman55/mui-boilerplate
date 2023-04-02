import { createSlice, AnyAction, type CaseReducerActions, type CreateSliceOptions, type PayloadAction, type Reducer, Slice } from '@reduxjs/toolkit';

import type { ThemeMode } from '../types';

/**
 * Theme Slice Name Type
 */
type Name = 'theme';

/**
 * Theme Slice Name
 */
const name: Name = 'theme';

/**
 * Theme Slice Reducer Actions
 */
type ThemeSliceReducer = {
  /**
   * Reset Theme Action
   */
  reset: () => void;
  /**
   * Switch Theme Action
   */
  switchThemeMode: (state: ThemeState, action: PayloadAction<ThemeMode | undefined>) => void;
  /**
   * Set Theme Mode Action
   */
  setThemeMode: (state: ThemeState, action: PayloadAction<ThemeMode>) => void;
};

/**
 * Theme Slice Type
 */
type ThemeSlice = Slice<ThemeState, ThemeSliceReducer, Name>;

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
  const theme = JSON.parse(localStorage.getItem(name) || '{}');
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
 * Theme Mode
 */
const themeMode: ThemeMode = darkMode ? 'dark' : 'light';

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
const reducers: ThemeSliceReducer = {
  /**
   * Reset Theme State
   */
  reset: () => {
    return {
      ...initialState,
    };
  },
  /**
   * Switch Theme Action
   */
  switchThemeMode: (state: ThemeState, action: PayloadAction<ThemeMode | undefined>) => {
    if (action?.payload === 'system') {
      state.darkMode = getSystemPreference();
    } else if (action?.payload === 'light') {
      state.darkMode = false;
    } else if (action?.payload === 'dark') {
      state.darkMode = true;
    } else {
      state.darkMode = !state.darkMode;
    }
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
 * Theme Slice Options
 */
const themeSliceOptions: CreateSliceOptions<ThemeState, ThemeSliceReducer, Name> = {
  name,
  initialState,
  reducers,
};

/**
 * Theme Slice
 */
export const themeSlice: ThemeSlice = createSlice(themeSliceOptions);


/**
 * Theme Actions
 */
export const themeActions: CaseReducerActions<ThemeSliceReducer, Name> = themeSlice.actions;

/**
 * Theme Reducer
 */
const themeReducer: Reducer<ThemeState, AnyAction> = themeSlice.reducer;

/**
 * Export Default as themeReducer
 */
export default themeReducer;