import { createAction, props } from '@ngrx/store';
import { User } from '../model.ts';

// Action to initiate login
export const login = createAction(
  '[Auth] Login',
  props<{ email: string; password: string }>()
);

// Action dispatched on successful login
export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ user: User }>()
);

// Action dispatched on failed login
export const loginFailure = createAction(
  '[Auth] Login Failure',
  props<{ error: any }>()
);

// Action to initiate sign up
export const signUp = createAction(
  '[Auth] Sign Up',
  props<{ user: User }>()
);

// Action dispatched on successful sign up
export const signUpSuccess = createAction(
  '[Auth] Sign Up Success'
);

// Action dispatched on failed sign up
export const signUpFailure = createAction(
  '[Auth] Sign Up Failure',
  props<{ error: any }>()
);
