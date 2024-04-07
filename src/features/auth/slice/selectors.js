import inititialState from '.';
import { createSelector } from '@reduxjs/toolkit';

export const selectAuth = (state) => state.auth || inititialState;

export const selectIsAuthenticated = createSelector(
    selectAuth,
    (auth) => auth.isAuthenticated
);

export const selectLoading = createSelector(
    selectAuth,
    (auth) => auth.loading
);

export const selectError = createSelector(
    selectAuth,
    (auth) => auth.error
);

export const selectKeycloak = createSelector(
    selectAuth,
    (auth) => auth.keycloak
);

export const selectAuthState = createSelector(
    selectIsAuthenticated,
    selectKeycloak,
    selectLoading,
    selectError,
    (isAuthenticated, keycloak, loading, error) => ({
        isAuthenticated,
        keycloak,
        loading,
        error,
    })
);