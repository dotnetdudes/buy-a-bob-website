import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
    items: [],
    selectedItem: null,
    loading: false,
    error: null,
};

const cartsSlice = createSlice({
    name: 'carts',
    initialState,
    reducers: {
        fetchCarts(state) {
            state.loading = true;
            state.error = null;
        },
        fetchCartsSuccess(state, action) {
            state.items = action.payload;
            state.loading = false;
            state.error = null;
        },
        fetchCartsFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
        selectCart(state, action) {
            state.selectedItem = action.payload;
        },
    },
});

export const { fetchCarts, fetchCartsSuccess, fetchCartsFailure, selectCart } = cartsSlice.actions;

export default cartsSlice.reducer;
