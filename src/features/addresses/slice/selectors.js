import { createSelector } from "@reduxjs/toolkit";
import initialState from ".";

export const selectAddresses = (state) => state.address || initialState;

export const selectItems = createSelector(
    selectAddresses,
    (address) => address.items
    );

export const selectSelectedItem = createSelector(
    selectAddresses,
    (address) => address.selectedItem
    );

    export const selectError = createSelector(
        selectAddresses,
        (address) => address.error
        );

        export const selectLoading = createSelector(
            selectAddresses,
            (address) => address.loading
            );

export const selectAddressState = createSelector(
    selectItems,
    selectSelectedItem,
    selectError,
    selectLoading,
    (items, selectedItem, error, loading) => ({
        items,
        selectedItem,
        error,
        loading,
    })
);
