import inititialState from '.';
import { createSelector } from '@reduxjs/toolkit';

export const selectShippingTypes = (state) => state.shippingTypes || inititialState;

export const selectItems = createSelector(
    selectShippingTypes,
    (shippingTypes) => shippingTypes.items
);

export const selectSelectedItem = createSelector(
    selectShippingTypes,
    (shippingTypes) => shippingTypes.selectedItem
);

export const selectLoading = createSelector(
    selectShippingTypes,
    (shippingTypes) => shippingTypes.loading
);

export const selectError = createSelector(
    selectShippingTypes,
    (shippingTypes) => shippingTypes.error
);

export const selectShippingTypesState = createSelector(
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
