import { configureStore } from '@reduxjs/toolkit'
import themeReducer from '../components/ThemeProvider/slice'
import cartReducer from '../features/cart/slice'

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    cart: cartReducer,
  },
});
