import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../store';

// Define a type for the slice state
interface SearchState {
  searchText: string;
}

// Define the initial state using that type
const initialState: SearchState = {
  searchText: 'hello',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchText: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload;
    },
  },
});

export const {setSearchText} = searchSlice.actions;

export const selectSearchText = (state: RootState) => state.search.searchText;

export default searchSlice.reducer;
