import {createSlice} from '@reduxjs/toolkit';
import type {RootState} from '../store';

// Define a type for the slice state
interface HomeState {
  homeIsEnabled: boolean;
  favoriteIsEnabled: boolean;
  searchIsEnabled: boolean;
}

// Define the initial state using that type
const initialState: HomeState = {
  homeIsEnabled: true,
  favoriteIsEnabled: false,
  searchIsEnabled: false,
};

export const homeSlice = createSlice({
  name: 'home',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setHomeIsEnabled: state => {
      state.favoriteIsEnabled = false;
      state.searchIsEnabled = false;
      state.homeIsEnabled = true;
    },
    toggleFavoriteIsEnabled: state => {
      if (!state.favoriteIsEnabled) {
        state.homeIsEnabled = false;
        state.searchIsEnabled = false;
      } else {
        state.homeIsEnabled = true;
      }
      state.favoriteIsEnabled = !state.favoriteIsEnabled;
    },
    toggleSearchIsEnabled: state => {
      if (!state.searchIsEnabled) {
        state.favoriteIsEnabled = false;
        state.homeIsEnabled = false;
      } else {
        state.homeIsEnabled = true;
      }
      state.searchIsEnabled = !state.searchIsEnabled;
    },
  },
});

export const {
  setHomeIsEnabled,
  toggleFavoriteIsEnabled,
  toggleSearchIsEnabled,
} = homeSlice.actions;

export const selectHomeIsEnabled = (state: RootState) =>
  state.home.homeIsEnabled;
export const selectFavoriteIsEnabled = (state: RootState) =>
  state.home.favoriteIsEnabled;
export const selectSearchIsEnabled = (state: RootState) =>
  state.home.searchIsEnabled;

export default homeSlice.reducer;
