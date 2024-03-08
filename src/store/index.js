import { configureStore } from '@reduxjs/toolkit'
import themeReducer from '../components/ThemeProvider/slice'
import cartReducer from '../features/cart/slice'
import authReducer from '../features/auth/slice'

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    cart: cartReducer,
    auth: authReducer,
  },
});
