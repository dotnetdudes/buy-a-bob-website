import inititialState from '.';
import { createSelector } from '@reduxjs/toolkit';

export const selectStatus = (state) => state.status || inititialState;

export const selectItems = createSelector(
    selectStatus,
    (status) => status.items
);

export const selectSelectedItem = createSelector(
    selectStatus,
    (status) => status.selectedItem
);


export const selectLoading = createSelector(
    selectStatus,
    (status) => status.loading
);

export const selectError = createSelector(
    selectStatus,
    (status) => status.error
);

export const selectStatusState = createSelector(
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
