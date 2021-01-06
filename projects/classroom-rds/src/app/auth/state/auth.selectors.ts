
import { createFeatureSelector, createSelector } from '@ngrx/store';

import { User } from '../models/user.model';

import { AuthenticationState, authFeatureKey } from './auth.reducer';

export const selectAuthState = createFeatureSelector<AuthenticationState>(
  authFeatureKey
);
/*---------------------------------------------------------*/

export const isLoggedIn = createSelector(
  selectAuthState,
  auth => !!auth.user
);
export const isAdmin = createSelector(
  selectAuthState,
  (state: AuthenticationState): boolean => state.isAdmin
);
/*---------------------------------------------------------*/
export const selectIsLoggedIn = createSelector(
  selectAuthState,
  (state: AuthenticationState): boolean => state.user != null
);
export const selectUser = createSelector(
  selectAuthState,
  (state: AuthenticationState): User => state.user
);

export const getError = createSelector(
  selectAuthState,
  (state: AuthenticationState): any => state.error
);
