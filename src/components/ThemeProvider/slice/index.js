import { getThemeFromStorage } from '../utils';
import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  selected: getThemeFromStorage() || 'system',
};

const slice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme(state, action) {
      state.selected = action.payload;
    },
  },
});

export const { changeTheme } = slice.actions

export default slice.reducer
