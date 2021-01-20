import { Store } from '@ngrx/store';

import { ActionTypes, AppActions } from './app-core.actions';

export enum ErrorActions {
  RELOAD = 'Reload',
  NONE = 0,
  RESET = 1
}
export enum ErrorMessages {
  OFFLINE = 'No Connection Available',
  RESPONSE_ERROR = 'Error With Providing Response'
}
export interface IAppVersion {
  semver: string;
  isNewAvailable: boolean;
  checkingForVersion: boolean;
}
export interface IAppError {
  message: string;
  show: boolean;
  action: ErrorActions;
}
export interface IAppCore {
  sidebarExpanded: boolean;
  requestInProcess: boolean;
  version: IAppVersion;
  theme: string;
  themes: string[];
  error: IAppError;
  show: {
    addToPlaylist: boolean;
    status: 'loading' | 'none'
  }
}

export function getSidebarExpanded($state: Store<IAppCore>) {
  return $state.select(state => state.sidebarExpanded);
}

function getVersion(state: IAppCore, packageJson: any): IAppVersion {
  const currentVersion = state.version.semver;
  const remoteVersion = packageJson.version;
  const version: IAppVersion = {
    semver: '',
    isNewAvailable: state.version.isNewAvailable,
    checkingForVersion: false
  };
  const isCurrentVersionEmpty = '' === currentVersion;
  const isCurrentDifferentFromRemote =
    !isCurrentVersionEmpty && currentVersion !== remoteVersion;
  if (isCurrentVersionEmpty) {
    version.semver = remoteVersion;
  }
  if (isCurrentDifferentFromRemote && !version.isNewAvailable) {
    version.semver = currentVersion;
    version.isNewAvailable = true;
  } else {
    // upgrade is completed
    version.semver = remoteVersion;
    version.isNewAvailable = false;
  }
  return version;
}
