// DOCS : https://redux-toolkit.js.org/usage/usage-with-typescript#createslice

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

/**
 * User
 */
export type AuthUser = {
  email: string;
};

/**
 * Auth State
 */
type AuthState = {
  user: AuthUser | null;
  isLoggedIn: boolean;
};

/**
 * Initial App State
 */
const initialState: AuthState = {
  user: {
    email: 'material-ui@mui.com'
  },
  isLoggedIn: true
} as AuthState;

/**
 * Auth Slice
 */
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: () => {
      return {
        ...initialState,
        user: null,
      };
    },
    setUser: (state: AuthState, action: PayloadAction<AuthUser | null>) => {
      if (action.payload) {
        state.user = action.payload;
        localStorage.setItem('user-auth', JSON.stringify(action.payload));
      } else {
        state.user = null;
        localStorage.removeItem('user-auth');
      }
    },
    setIsLoggedIn: (state: AuthState, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;