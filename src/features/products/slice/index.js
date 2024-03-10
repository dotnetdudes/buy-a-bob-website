import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  items: [],
  selectedItem: null,
  loading: false,
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchProducts(state) {
      state.loading = true;
      state.error = null;
    },
    fetchProductsSuccess(state, action) {
      state.items = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchProductsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    selectProduct(state, action) {
      state.selectedItem = action.payload;
    },
  },
});

export const { fetchProducts, fetchProductsSuccess, fetchProductsFailure, selectProduct } = productsSlice.actions;

export default productsSlice.reducer;
