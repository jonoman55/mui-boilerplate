// DOCS : https://redux-toolkit.js.org/usage/usage-with-typescript#createslice

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AppState = {
    drawerOpen: boolean;
};

const initialState: AppState = {
    drawerOpen: false,
} as AppState;

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