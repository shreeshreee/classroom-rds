import { createReducer, on } from '@ngrx/store';

import { User } from '../models/user.model';

import * as fromAuthActions from './auth.actions';
export const authFeatureKey = 'auth';

export interface AuthenticationState {
  user: User;
  isAdmin: boolean;
  isLoggedIn: boolean;
  error: any;
}

export const initialState: AuthenticationState = {
  user: null,
  isAdmin: false,
  isLoggedIn: false,
  error: null,
};

export const authReducer = createReducer<AuthenticationState>(
  initialState,
  on(fromAuthActions.signInSuccess, (state, action) => {
    return {
      ...state,
      user: action.user,
      isAdmin: false,
      error: null,
      isLoggedIn: true
    };
  }),
  on(fromAuthActions.updateProfileSuccess, (state, action) => {
    return {
      ...state,
      user: action.user,
    };
  }),
  on(fromAuthActions.signInFailure, (state, action) => {
    return {
      ...state,
      user: null,
      isLoggedIn: false,
      error: action.error
    };
  }),
  on(fromAuthActions.authError, (state, action) => {
    return {
      ...state,
      error: action.error
    };
  }),
  on(fromAuthActions.signOut, (state) => {
    return {
      ...state,
      user: null,
      isLoggedIn: false,
    };
  }),
  on(fromAuthActions.updateAdminRole, (state, action) => {
    return {
      ...state,
      isAdmin: action.isAdmin
    };

  })
);


