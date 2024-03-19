import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    selectedItem: null,
    loading: false,
    error: null,
};

const customersSlice = createSlice({
    name: 'customers',
    initialState,
    reducers: {
        fetchCustomersStart(state) {
            state.loading = true;
            state.error = null;
        },
        fetchCustomersSuccess(state, action) {
            state.items = action.payload;
            state.loading = false;
            state.error = null;
        },
        fetchCustomersFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
        fetchCustomerStart(state) {
            state.loading = true;
            state.error = null;
        },
        fetchCustomerSuccess(state, action) {
            state.selectedItem = action.payload;
            state.loading = false;
            state.error = null;
        },
        fetchCustomerFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
        createCustomerStart(state) {
            state.loading = true;
            state.error = null;
        },
        createCustomerSuccess(state, action) {
            state.items.push(action.payload);
            state.loading = false;
            state.error = null;
        },
        createCustomerFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
        updateCustomerStart(state) {
            state.loading = true;
            state.error = null;
        },
        updateCustomerSuccess(state, action) {
            const index = state.items.findIndex((item) => item.id === action.payload.id);
            state.items[index] = action.payload;
            state.loading = false;
            state.error = null;
        },
        updateCustomerFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
        deleteCustomerStart(state) {
            state.loading = true;
            state.error = null;
        },
        deleteCustomerSuccess(state, action) {
            state.items = state.items.filter((item) => item.id !== action.payload);
            state.loading = false;
            state.error = null;
        },
        deleteCustomerFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const {
    fetchCustomersStart,
    fetchCustomersSuccess,
    fetchCustomersFailure,
    fetchCustomerStart,
    fetchCustomerSuccess,
    fetchCustomerFailure,
    createCustomerStart,
    createCustomerSuccess,
    createCustomerFailure,
    updateCustomerStart,
    updateCustomerSuccess,
    updateCustomerFailure,
    deleteCustomerStart,
    deleteCustomerSuccess,
    deleteCustomerFailure,
} = customersSlice.actions;

export default customersSlice.reducer;
