import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
    token: null,
    loading: false,
    error: null,
    };

const antiforgerySlice = createSlice({
    name: 'antiforgery',
    initialState,
    reducers: {
        fetchToken(state) {
            state.loading = true;
            state.error = null;
        },
        fetchTokenSuccess(state, action) {
            state.token = action.payload;
            state.loading = false;
            state.error = null;
        },
        fetchTokenFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { fetchToken, fetchTokenSuccess, fetchTokenFailure } = antiforgerySlice.actions;

export default antiforgerySlice.reducer;
