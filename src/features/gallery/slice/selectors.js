import { createSelector } from "@reduxjs/toolkit";
import initialState from ".";

export const selectGallery = (state) => state.gallery || initialState;

export const selectOrientation = createSelector(
    selectGallery,
    (gallery) => gallery.orientation
    );

export const selectSelectedItem = createSelector(
    selectGallery,
    (gallery) => gallery.selectedItem
    );

export const selectGalleryState = createSelector(
    selectOrientation,
    selectSelectedItem,
    (orientation, selectedItem) => ({
        orientation,
        selectedItem,
    })
);
