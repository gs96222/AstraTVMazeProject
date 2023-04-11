import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../store';
import {Show} from '../../types/interfaces';

// Define a type for the slice state
interface AppState {
  showOfInterest: Show | null;
  favoriteShows: Show[];
}

// Define the initial state using that type
const initialState: AppState = {
  showOfInterest: null,
  favoriteShows: [],
};

export const appSlice = createSlice({
  name: 'app',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setShowOfInterest: (state, action: PayloadAction<Show>) => {
      state.showOfInterest = action.payload;
    },
    addFavoriteShow: (state, action: PayloadAction<Show>) => {
      state.favoriteShows.push(action.payload);
    },
    removeFavoriteShow: (state, action: PayloadAction<Show>) => {
      state.favoriteShows = state.favoriteShows.filter(
        show => show.id !== action.payload.id,
      );
    },
  },
});

export const {setShowOfInterest, addFavoriteShow, removeFavoriteShow} =
  appSlice.actions;

export const selectShowOfInterest = (state: RootState) =>
  state.app.showOfInterest;

export const selectFavoriteShows = (state: RootState) =>
  state.app.favoriteShows;

export default appSlice.reducer;
