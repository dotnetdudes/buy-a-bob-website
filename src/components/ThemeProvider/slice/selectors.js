import { initialState } from '.';
import { generateTheme } from '../themes';
import { createSelector } from '@reduxjs/toolkit';

export const selectTheme = createSelector(
  [(state) => state?.theme || initialState],
  theme => {
    // For Theme switching
    if (theme?.selected === 'system') {
      return generateTheme('light');
    }
    return generateTheme(theme?.selected);
  },
);

export const selectThemeKey = createSelector(
  [(state) => state?.theme || initialState],
  theme => theme.selected,
);
