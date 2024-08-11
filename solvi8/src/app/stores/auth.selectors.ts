import { createSelector } from '@ngrx/store';
import { AuthState } from './auth.reducer';

// Select the authentication state
export const selectAuthState = (state: any) => state.auth;

// Selector to get the current user
export const selectUser = createSelector(
  selectAuthState,
  (state: AuthState) => state.user
);

// Selector to check if the user is authenticated
export const selectIsAuthenticated = createSelector(
  selectAuthState,
  (state: AuthState) => state.isAuthenticated
);

// Selector to get any authentication errors
export const selectAuthError = createSelector(
  selectAuthState,
  (state: AuthState) => state.error
);
