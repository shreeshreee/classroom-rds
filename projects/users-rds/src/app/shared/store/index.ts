import { RouterReducerState, routerReducer } from "@ngrx/router-store";
import { ActionReducerMap } from "@ngrx/store";

export interface AppState {
  appCore: any;
  router: RouterReducerState;
}
export const reducers: ActionReducerMap<AppState> = {
  appCore: null,
  router: routerReducer,
};
