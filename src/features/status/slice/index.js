import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    items: [],
    selectedItem: null,
    loading: false,
    error: null,
    };

const statusSlice = createSlice({
    name: "status",
    initialState,
    reducers: {
        fetchStatus(state) {
            state.loading = true;
            state.error = null;
        },
        fetchStatusSuccess(state, action) {
            state.items = action.payload;
            state.loading = false;
            state.error = null;
        },
        fetchStatusFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
        selectStatus(state, action) {
            state.selectedItem = action.payload;
        },
    },
});

export const { fetchStatus, fetchStatusSuccess, fetchStatusFailure, selectStatus } = statusSlice.actions;

export default statusSlice.reducer;
