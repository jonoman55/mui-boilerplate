// DOCS : https://redux-toolkit.js.org/usage/usage-with-typescript#createslice

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

/**
 * App State
 */
type AppState = {
  drawerOpen: boolean;
};

/**
 * Initial App State
 */
const initialState: AppState = {
  drawerOpen: false,
} as AppState;

/**
 * App Slice
 */
const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    reset: () => initialState,
    setDrawerOpen: (state: AppState, action: PayloadAction<boolean>) => {
      state.drawerOpen = action.payload;
    },
  },
});

export const appActions = appSlice.actions;
export default appSlice.reducer;