import { configureStore } from '@reduxjs/toolkit'
import themeReducer from '../components/ThemeProvider/slice'

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});
