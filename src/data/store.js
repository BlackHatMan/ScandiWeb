import { configureStore } from '@reduxjs/toolkit';
import itemSlice from './slice';

export const store = configureStore({
  reducer: itemSlice,
});

/* export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>; */
