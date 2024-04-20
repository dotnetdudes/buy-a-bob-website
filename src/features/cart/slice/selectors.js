import { initialState } from '.';
import { createSelector } from '@reduxjs/toolkit';

export const getCart = (state) => state?.cart || initialState;

export const getItems = createSelector(
    getCart,
    (cart) => cart.items
    );

export const getSelectedItem = createSelector(
    getCart,
    (cart) => cart.selectedItem
    );

export const getCartTotal = createSelector(
    getItems,
    (items) => items.reduce((total, item) => total + (item.price * item.quantity), 0)
    );

export const getCartQuantity = createSelector(
    getItems,
    (items) => items.reduce((total, item) => total + item.quantity, 0)
    );

export const getCartItems = createSelector(
    getItems,
    (items) => items.filter((item) => item.quantity > 0)
    );

export const getCartCount = createSelector(
    getItems,
    (items) => items.length
    );
