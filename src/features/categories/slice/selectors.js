import inititialState from '.';
import { createSelector } from '@reduxjs/toolkit';

export const selectCategories = (state) => state.categories || inititialState;

export const selectItems = createSelector(
    selectCategories,
    (categories) => categories.items
);

export const selectSelectedItem = createSelector(
    selectCategories,
    (categories) => categories.selectedItem
);

export const selectLoading = createSelector(
    selectCategories,
    (categories) => categories.loading
);

export const selectError = createSelector(
    selectCategories,
    (categories) => categories.error
);

export const selectCategoriesState = createSelector(
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
