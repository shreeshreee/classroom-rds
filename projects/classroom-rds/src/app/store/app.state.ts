import { Action, ActionReducer, ActionReducerMap, INIT, MetaReducer } from '@ngrx/store';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';

import { environment } from '@rds-env/environment';

import { AuthenticationState, authFeatureKey, authReducer } from '@rds-auth/state/auth.reducer';
import * as fromAuthActions from '@rds-auth/state/auth.actions';
export interface AppState {
  [authFeatureKey]: AuthenticationState;
  router: RouterReducerState;
}
export const reducers: ActionReducerMap<AppState> = {
  [authFeatureKey]: authReducer,
  router: routerReducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? [debug, logout]
  : [/* clearState */];

export function debug(
  reducer: ActionReducer<AppState>
): ActionReducer<AppState> {
  return function (state: AppState | undefined, action: Action) {
    if (state !== undefined || state !== null) {
      console.groupCollapsed(`Action type: ${action.type}`);
      console.log(`%c Preview State: `, `color: #007bb4; font-weight: bold`, state);
      console.log(`%c Action: `, `color: #b46c00; font-weight: bold`, action);
      const nextState = reducer(state, action);
      console.log(`%c Next State: `, `color: #196d00; font-weight: bold`, nextState);
      console.groupEnd();
      return reducer(state, action);
    }
  }
}

export function logout(reducer: ActionReducer<AppState, Action>): ActionReducer<AppState, Action> {
  return (state, action) => {
    if (action != null && action.type === fromAuthActions.signOut.type) {
      return reducer(undefined, { type: INIT });
    }
    return reducer(state, action);
  };
}


