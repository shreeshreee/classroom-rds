import { createReducer, on } from '@ngrx/store';

import { User } from '../models/user.model';

import * as fromauthActions from './auth.actions';
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
  on(fromauthActions.signInSuccess, fromauthActions.browserReload, (state, action) => {
    return {
      ...state,
      user: action.user,
      error: null,
      isLoggedIn: true
    };
  }),
  on(fromauthActions.updateProfileSuccess, (state, action) => {
    return {
      ...state,
      user: action.user,
    };
  }),
  on(fromauthActions.signInFailure, (state, action) => {
    return {
      ...state,
      user: null,
      isLoggedIn: false,
      error: action.error
    };
  }),
  on(fromauthActions.authError, (state, action) => {
    return {
      ...state,
      error: action.error
    };
  }),
  on(fromauthActions.signOut, (state, action) => {
    return {
      ...state,
      user: null,
      isLoggedIn: false,
      isAdmin: false
    };
  }),
  on(fromauthActions.updateAdminRole, (state, action) => {
    return {
      ...state,
      isAdmin: action.isAdmin
    };

  })
);
