import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    items: [],
    selectedItem: null,
    loading: false,
    error: null,
    };

const shippingTypesSlice = createSlice({
    name: "shippingTypes",
    initialState,
    reducers: {
        fetchShippingTypes(state) {
            state.loading = true;
            state.error = null;
        },
        fetchShippingTypesSuccess(state, action) {
            state.items = action.payload;
            state.loading = false;
            state.error = null;
        },
        fetchShippingTypesFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
        selectShippingType(state, action) {
            state.selectedItem = action.payload;
        },
    },
});

export const { fetchShippingTypes, fetchShippingTypesSuccess, fetchShippingTypesFailure, selectShippingType } = shippingTypesSlice.actions;

export default shippingTypesSlice.reducer;
