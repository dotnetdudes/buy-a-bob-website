import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    items: [],
    selectedItem: null,
    loading: false,
    error: null,
    };

const addressesSlice = createSlice({
    name: "addresses",
    initialState,
    reducers: {
        fetchAddresses(state) {
            state.loading = true;
            state.error = null;
        },
        fetchAddressesSuccess(state, action) {
            state.items = action.payload;
            state.loading = false;
            state.error = null;
        },
        fetchAddressesFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
        selectAddress(state, action) {
            state.selectedItem = action.payload;
        },
    },
});

export const { fetchAddresses, fetchAddressesSuccess, fetchAddressesFailure, selectAddress } = addressesSlice.actions;

export default addressesSlice.reducer;
