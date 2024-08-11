import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import { loginSuccess, loginFailure, signUpSuccess, signUpFailure } from './auth.actions';
import { User } from '../model.ts';

// Define the authentication state interface
export interface AuthState {
  user: User | null;
  error: string | null;
  isAuthenticated: boolean;
}

// Define the initial state
export const initialState: AuthState = {
  user: null,
  error: null,
  isAuthenticated: false
};

// Create the reducer
export const authReducer: ActionReducer<AuthState, Action<string>> = createReducer(
  initialState,
  // Handle login success
  on(loginSuccess, (state, { user }) => ({
    ...state,
    user,
    isAuthenticated: true,
    error: null
  })),
  // Handle login failure
  on(loginFailure, (state, { error }) => ({
    ...state,
    error,
    isAuthenticated: false
  })),
  // Handle sign-up success
  on(signUpSuccess, state => ({
    ...state,
    error: null
  })),
  // Handle sign-up failure
  on(signUpFailure, (state, { error }) => ({
    ...state,
    error
  }))
);
