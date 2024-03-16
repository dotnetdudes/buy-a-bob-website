import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    items: [],
    selectedItem: null,
    loading: false,
    error: null,
    };

const tagsSlice = createSlice({
    name: "tags",
    initialState,
    reducers: {
        fetchTags(state) {
            state.loading = true;
            state.error = null;
        },
        fetchTagsSuccess(state, action) {
            state.items = action.payload;
            state.loading = false;
            state.error = null;
        },
        fetchTagsFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
        selectTag(state, action) {
            state.selectedItem = action.payload;
        },
    },
});

export const { fetchTags, fetchTagsSuccess, fetchTagsFailure, selectTag } = tagsSlice.actions;

export default tagsSlice.reducer;
