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
    fetchProduct(state) {
      state.loading = true;
      state.error = null;
    },
    fetchProductSuccess(state, action) {
      state.selectedItem = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchProductFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    selectProduct(state, action) {
      state.selectedItem = action.payload;
    },
    // eslint-disable-next-line no-unused-vars
    addProduct(state, action) {
      state.loading = true;
      state.error = null;
    },
    addProductSuccess(state, action) {
      state.items.push(action.payload);
      state.loading = false;
      state.error = null;
    },
    addProductFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    editProduct(state) {
      state.loading = true;
      state.error = null;
    },
    editProductSuccess(state, action) {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      state.items[index] = action.payload;
      state.loading = false;
      state.error = null;
    },
    editProductFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    deleteProduct(state) {
      state.loading = true;
      state.error = null;
    },
    deleteProductSuccess(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
      state.loading = false;
      state.error = null;
      state.selectedItem = null;
    },
    deleteProductFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchProducts,
  fetchProductsSuccess,
  fetchProductsFailure,
  fetchProduct,
  fetchProductSuccess,
  fetchProductFailure,
  selectProduct,
  addProduct,
  addProductSuccess,
  addProductFailure,
  editProduct,
  editProductSuccess,
  editProductFailure,
  deleteProduct,
  deleteProductSuccess,
  deleteProductFailure,
} = productsSlice.actions;

export default productsSlice.reducer;
