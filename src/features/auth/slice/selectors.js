import inititialState from '.';
import { createSelector } from '@reduxjs/toolkit';

export const selectAuth = (state) => state.auth || inititialState;

export const selectIsAuthenticated = createSelector(
    selectAuth,
    (auth) => auth.isAuthenticated
);

export const selectToken = createSelector(
    selectAuth,
    (auth) => auth.token
);

export const selectUser = createSelector(
    selectAuth,
    (auth) => auth.user
);

export const selectLoading = createSelector(
    selectAuth,
    (auth) => auth.loading
);

export const selectError = createSelector(
    selectAuth,
    (auth) => auth.error
);

export const selectIsAdmin = createSelector(
    selectUser,
    (user) => user?.role === 'admin'
);

export const selectAuthState = createSelector(
    selectIsAuthenticated,
    selectToken,
    selectUser,
    selectLoading,
    selectError,
    (isAuthenticated, token, user, loading, error) => ({
        isAuthenticated,
        token,
        user,
        loading,
        error,
    })
);