import inititialState from '.';
import { createSelector } from '@reduxjs/toolkit';

export const selectProducts = (state) => state.products || inititialState;

export const selectItems = createSelector(
    selectProducts,
    (products) => products.items
);

export const selectSelectedItem = createSelector(
    selectProducts,
    (products) => products.selectedItem
);

export const selectProductState = createSelector(
    selectItems,
    selectSelectedItem,
    (items, selectedItem) => ({
        items,
        selectedItem,
    })
);

export const selectProductById = (id) => createSelector(
    selectItems,
    (items) => items.find((item) => item.id === id)
);

export const selectProductByCategory = (category) => createSelector(
    selectItems,
    (items) => items.filter((item) => item.category === category)
);

export const selectProductByNotSold = createSelector(
    selectItems,
    (items) => items.filter((item) => !item.isSold)
);

export const selectProductBySold = createSelector(
    selectItems,
    (items) => items.filter((item) => item.isSold)
);

export const selectProductByDeleted = createSelector(
    selectItems,
    (items) => items.filter((item) => item.deleted)
);

export const selectProductByNotDeleted = createSelector(
    selectItems,
    (items) => items.filter((item) => !item.deleted)
);

// select product by orientation width, height - portrait, landscape
export const selectProductByOrientation = (orientation) => createSelector(
    selectItems,
    (items) => items.filter((item) => item.width > item.height ? orientation === 'landscape' : orientation === 'portrait')
);
