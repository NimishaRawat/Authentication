import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../services/auth.service';
import { login, loginSuccess, loginFailure, signUp, signUpSuccess, signUpFailure } from './auth.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthService) {}

  // Effect for login
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      mergeMap(({ email, password }) =>
        of(this.authService.login(email, password)).pipe(
          map(isValid => {
            if (isValid) {
              return loginSuccess({ user: { email, password } }); // Assuming user object structure
            } else {
              return loginFailure({ error: 'Invalid email or password' });
            }
          }),
          catchError(error => of(loginFailure({ error })))
        )
      )
    )
  );

  // Effect for sign-up
  signUp$ = createEffect(() =>
    this.actions$.pipe(
      ofType(signUp),
      mergeMap(({ user }) =>
        this.authService.signUp(user).pipe(
          map(() => signUpSuccess()),
          catchError(error => of(signUpFailure({ error })))
        )
      )
    )
  );
}
