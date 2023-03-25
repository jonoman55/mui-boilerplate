// DOCS : https://redux-toolkit.js.org/usage/usage-with-typescript
 
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

import appReducer from '../reducers/appSlice';
import themeReducer from '../reducers/themeSlice';
import { usersApi } from '../apis/usersApi';

export const store = configureStore({
  reducer: {
    app: appReducer,
    theme: themeReducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }).concat(
    usersApi.middleware,
  ),
});

// NOTE : for refetchOnReconnect
setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
