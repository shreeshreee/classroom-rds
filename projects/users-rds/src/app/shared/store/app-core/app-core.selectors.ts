import { createSelector } from '@ngrx/store';

import { AppState } from './../';

import { IAppCore, IAppError } from './app-core.reducer';

export const getAppCore = (state: AppState) => state.appCore;
export const getAppTheme = createSelector(
  getAppCore,
  (state: IAppCore) => state.theme
);
export const getAllAppThemes = createSelector(
  getAppCore,
  (state: IAppCore) => state.themes
);
export const getAppThemes = createSelector(
  getAppCore,
  getAppTheme,
  getAllAppThemes,
  (appLayout, theme: string, themes: string[]) => ({
    selected: theme,
    themes: themes.map(_theme => ({ label: _theme, value: _theme }))
  })
);
export const getAppVersion = createSelector(
  getAppCore,
  (state: IAppCore) => state.version
);
export const getSidebarCollapsed = createSelector(
  getAppCore,
  (state: IAppCore) => !state.sidebarExpanded
);
export const selectError = createSelector(
  getAppCore,
  (state: IAppCore) => state.error
);
export const selectErrorMessage = createSelector(
  selectError,
  (error: IAppError) => error.message
);
export const selectIsErrorShow = createSelector(
  selectError,
  (error: IAppError) => error.show
);
export const selectErrorAction = createSelector(
  selectError,
  (error: IAppError) => error.action
);

export const selectShowAddToPlaylist = createSelector(
  getAppCore,
  (state: IAppCore) => state.show.addToPlaylist
);
