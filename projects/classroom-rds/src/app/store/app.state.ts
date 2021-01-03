import { Action, ActionReducerMap, MetaReducer, ActionReducer, State } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';

import { environment } from '../../environments/environment';
import * as fromAuthReducer from '../auth/state/auth.reducer';

export interface AppState {
  [fromAuthReducer.authFeatureKey]: fromAuthReducer.AuthenticationState;
  router: fromRouter.RouterReducerState;
}
export const reducers: ActionReducerMap<AppState> = {
  [fromAuthReducer.authFeatureKey]: fromAuthReducer.authReducer,
  router: fromRouter.routerReducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? [debug]
  : [];

export function debug(
  reducer: ActionReducer<AppState>
): ActionReducer<AppState> {
  return function (state: AppState | undefined, action: Action) {
    if (state !== undefined) {
      console.groupCollapsed(`[State: ${state}] [Action Type: ${action.type}]`);
      console.log('state: ', state);
      console.log('action: ', action.type);
      console.groupEnd();
    }
    return reducer(state, action);
  };
}
