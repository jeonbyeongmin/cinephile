import modal from '@/redux/features/modalSlice';
import { configureStore } from '@reduxjs/toolkit';

const isDev = process.env.NODE_ENV !== 'production';

export const store = configureStore({
  reducer: {
    modal,
  },
  devTools: isDev,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
