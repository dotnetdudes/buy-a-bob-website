import inititialState from '.';
import { createSelector } from '@reduxjs/toolkit';

export const selectAntiforgery = (state) => state.antiforgery || inititialState;

export const selectToken = createSelector(
    selectAntiforgery,
    (antiforgery) => antiforgery.token
);

export const selectLoading = createSelector(
    selectAntiforgery,
    (antiforgery) => antiforgery.loading
);

export const selectError = createSelector(
    selectAntiforgery,
    (antiforgery) => antiforgery.error
);

export const selectAntiforgeryState = createSelector(
    selectToken,
    selectLoading,
    selectError,
    (token, loading, error) => ({
        token,
        loading,
        error,
    })
);
