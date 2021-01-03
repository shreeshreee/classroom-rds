
import { createFeatureSelector, createSelector } from '@ngrx/store';

import { User } from '../models/user.model';

import * as fromAuthReducer from './auth.reducer';
export const selectAuthState = createFeatureSelector<fromAuthReducer.AuthenticationState>(
  fromAuthReducer.authFeatureKey
);
export const selectIsLoggedIn = createSelector(
  selectAuthState,
  (state: fromAuthReducer.AuthenticationState): boolean => state.user != null
);
export const selectUser = createSelector(
  selectAuthState,
  (state: fromAuthReducer.AuthenticationState): User => state.user
);
export const selectIsAdmin = createSelector(
  selectAuthState,
  (state: fromAuthReducer.AuthenticationState): boolean => state.isAdmin
);
export const getError = createSelector(
  selectAuthState,
  (state: fromAuthReducer.AuthenticationState): any => state.error
);
