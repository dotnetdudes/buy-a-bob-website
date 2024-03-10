import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    orientation: 'landscape',
    selectedItem: null,
};

const gallerySlice = createSlice({
    name: "gallery",
    initialState,
    reducers: {
        toggleOrientation(state) {
            state.orientation = state.orientation === 'landscape' ? 'portrait' : 'landscape';
        },
        selectItem(state, action) {
            state.selectedItem = action.payload;
        },
    },
});

export const { toggleOrientation, selectItem } = gallerySlice.actions;

export default gallerySlice.reducer;
