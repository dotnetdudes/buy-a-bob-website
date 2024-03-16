import { configureStore } from '@reduxjs/toolkit'
import themeReducer from '../components/ThemeProvider/slice'
import cartReducer from '../features/cart/slice'
import authReducer from '../features/auth/slice'
import productReducer from '../features/products/slice'
import galleryReducer from '../features/gallery/slice'
import addressReducer from '../features/addresses/slice'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './rootSaga'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    cart: cartReducer,
    auth: authReducer,
    products: productReducer,
    gallery: galleryReducer,
    address: addressReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga)
