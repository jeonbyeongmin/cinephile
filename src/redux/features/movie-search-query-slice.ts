import { RootState } from '@/redux/store';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type MovieSearchQueryActionPayload = {
  searchQuery: string;
};

interface MovieSearchQueryState {
  searchQuery: string;
}

const initialState: MovieSearchQueryState = {
  searchQuery: '',
};

export const movieSearchQuerySlice = createSlice({
  name: 'movie-search-query',
  initialState,
  reducers: {
    chnage: (state, actions: PayloadAction<MovieSearchQueryActionPayload>) => {
      const { searchQuery } = actions.payload;
      state.searchQuery = searchQuery;
    },
    reset: state => {
      state.searchQuery = '';
    },
  },
});

export const selectMovieSearchQuery = (state: RootState) => state.movieSearchQuery;
export const { chnage, reset } = movieSearchQuerySlice.actions;

export default movieSearchQuerySlice.reducer;
