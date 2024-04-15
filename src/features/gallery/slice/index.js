import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    orientation: 'all',
    selectedItem: null,
};

const gallerySlice = createSlice({
    name: "gallery",
    initialState,
    reducers: {
        toggleOrientation(state, action) {
            state.orientation = action.payload;
        },
        selectItem(state, action) {
            state.selectedItem = action.payload;
        },
    },
});

export const { toggleOrientation, selectItem } = gallerySlice.actions;

export default gallerySlice.reducer;
