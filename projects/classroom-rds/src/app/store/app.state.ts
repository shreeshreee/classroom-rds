import {
  ActionReducer,
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';

import { environment } from '../../environments/environment';
import { AuthenticationState, authFeatureKey, authReducer } from '../auth/state/auth.reducer';
export interface AppState {
  [authFeatureKey]: AuthenticationState;
  router: RouterReducerState;
}
export const reducers: ActionReducerMap<AppState> = {
  [authFeatureKey]: authReducer,
  router: routerReducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? [debug, clearState]
  : [];

export function debug(
  reducer: ActionReducer<AppState>
): ActionReducer<AppState> {
  return (state, action) => {
    console.groupCollapsed(`Action type: ${action.type}`);
    console.log("state before: ", state);
    console.log("action", action);
    console.groupEnd();
    return reducer(state, action);
  }
}

export function clearState(
  reducer: ActionReducer<AppState>
): ActionReducer<AppState> {
  return (state, action): AppState => {
    if (action.type === '[Auth Effect] Google`s sign-out completed') {
      state = undefined;
    }
    return reducer(state, action);
  };
}
