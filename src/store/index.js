import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../components/ThemeProvider/slice";
import cartReducer from "../features/cart/slice";
import authReducer from "../features/auth/slice";
import productReducer from "../features/products/slice";
import galleryReducer from "../features/gallery/slice";
import addressReducer from "../features/addresses/slice";
import tagReducer from "../features/tags/slice";
import statusReducer from "../features/status/slice";
import categoriesReducer from "../features/categories/slice";
import shippingTypesReducer from "../features/shippingtypes/slice";
import cartsReducer from "../features/carts/slice";
import antiforgeryReducer from "../features/antiforgery/slice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    antiforgery: antiforgeryReducer,
    theme: themeReducer,
    cart: cartReducer,
    auth: authReducer,
    products: productReducer,
    gallery: galleryReducer,
    address: addressReducer,
    tags: tagReducer,
    status: statusReducer,
    categories: categoriesReducer,
    shippingTypes: shippingTypesReducer,
    carts: cartsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["products/addProduct"],
      },
    }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
