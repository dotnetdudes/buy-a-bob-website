import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    items: [],
    selectedItem: null,
    loading: false,
    error: null,
    };

const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {
        fetchCategories(state) {
            state.loading = true;
            state.error = null;
        },
        fetchCategoriesSuccess(state, action) {
            state.items = action.payload;
            state.loading = false;
            state.error = null;
        },
        fetchCategoriesFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
        selectCategory(state, action) {
            state.selectedItem = action.payload;
        },
    },
});

export const { fetchCategories, fetchCategoriesSuccess, fetchCategoriesFailure, selectCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;
