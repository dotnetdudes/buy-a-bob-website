import inititialState from '.';
import { createSelector } from '@reduxjs/toolkit';

export const selectCarts = (state) => state.carts || inititialState;

export const selectItems = createSelector(
    selectCarts,
    (carts) => carts.items
);

export const selectSelectedItem = createSelector(
    selectCarts,
    (carts) => carts.selectedItem
);

export const selectLoading = createSelector(
    selectCarts,
    (carts) => carts.loading
);

export const selectError = createSelector(
    selectCarts,
    (carts) => carts.error
);

export const selectCartsState = createSelector(
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
