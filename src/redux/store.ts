import modal from '@/redux/features/modal-slice';
import movieSearchQuery from '@/redux/features/movie-search-query-slice';
import { configureStore } from '@reduxjs/toolkit';

const isDev = process.env.NODE_ENV !== 'production';

export const store = configureStore({
  reducer: {
    modal,
    movieSearchQuery,
  },
  devTools: isDev,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
