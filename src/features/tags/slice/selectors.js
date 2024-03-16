import inititialState from '.';
import { createSelector } from '@reduxjs/toolkit';

export const selectTags = (state) => state.tags || inititialState;

export const selectItems = createSelector(
    selectTags,
    (tags) => tags.items
);

export const selectSelectedItem = createSelector(
    selectTags,
    (tags) => tags.selectedItem
);

export const selectLoading = createSelector(
    selectTags,
    (tags) => tags.loading
);

export const selectError = createSelector(
    selectTags,
    (tags) => tags.error
);

export const selectTagsState = createSelector(
    selectItems,
    selectSelectedItem,
    selectLoading,
    selectError,
    (items, selectedItem, loading, error) => ({
        items,
        selectedItem,
        loading,
        error,
    })
);

