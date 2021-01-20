
import { Action, createReducer, on } from '@ngrx/store';

import * as userProfileActions from './user-profile.actions';
import { userProfileAdapter, initialState, State } from './user-profile.state';
export const authFeatureKey = 'userProfile';

const featureReducer = createReducer(
  initialState,
  /*   on(userProfileActions.load, state => ({
      ...state,
      isLoading: true,
      error: null
    })),
    on(userProfileActions.searchUserProfiles, state => ({
      ...state,
      isLoading: true,
      error: null
    })),
    on(userProfileActions.updateTotal, (state, { total }) => {
      return { ...state, total };
    }),
    on(userProfileActions.loadSuccess, (state, { userProfiles }) => {
      return userProfileAdapter.addAll(userProfiles, {
        ...state,
        isLoading: false,
        error: null
      });
    }),
    on(userProfileActions.actionFailure, (state, { error }) => ({
      ...state,
      isLoading: false,
      error
    })),
    on(userProfileActions.select, (state, { selectedUserProfileId }) => {
      return ({
        ...state,
        selectedUserProfileId
      });
    })  */
);

export function reducer(state: State | undefined, action: Action) {
  return featureReducer(state, action);
}
