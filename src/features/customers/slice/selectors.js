import inititialState from '.';
import { createSelector } from '@reduxjs/toolkit';

export const selectCustomers = (state) => state.customers || inititialState;

export const selectCustomersItems = createSelector(
    selectCustomers,
    (customers) => customers.items
);

export const selectCustomersLoading = createSelector(
    selectCustomers,
    (customers) => customers.loading
);

export const selectCustomersError = createSelector(
    selectCustomers,
    (customers) => customers.error
);

export const selectCustomer = createSelector(
    selectCustomers,
    (customers) => customers.selectedItem
);

export const selectCustomerState = createSelector(
    selectCustomersItems,
    selectCustomersLoading,
    selectCustomersError,
    (items, loading, error) => ({
        items,
        loading,
        error,
    })
);