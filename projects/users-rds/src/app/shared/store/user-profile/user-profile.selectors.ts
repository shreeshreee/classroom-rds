
import { createFeatureSelector, createSelector } from '@ngrx/store';

import { UserProfile } from '../../../core/models/user-profile.model';

import { UserProfileActions } from './user-profile.actions';
import { userProfileAdapter, State } from './user-profile.state';
export const selectUserProfileState = createFeatureSelector<State>('userProfile');

export const selectAllUserProfileItems: (
  state: object
) => UserProfile[] = userProfileAdapter.getSelectors(selectUserProfileState).selectAll;

export const selectTotalUserProfileItems = createSelector(
  selectUserProfileState,
  (state: State): number => {
    return state.total;
  }
);

const selectSelectedUserProfileId = createSelector(
  selectUserProfileState,
  (state: State): string | number => state.selectedUserProfileId
);

export const selectCurrentUserProfile = createSelector(
  selectAllUserProfileItems,
  selectSelectedUserProfileId,
  (allUserProfiles: UserProfile[], selectedUserProfileId: string | number) => {
    if (allUserProfiles && selectedUserProfileId) {
      return allUserProfiles.find(p => p.id === selectedUserProfileId);
    } else {
      return null;
    }
  }
);

export const selectUserProfileError = createSelector(
  selectUserProfileState,
  (state: State): any => state.error
);

export const selectUserProfileIsLoading = createSelector(
  selectUserProfileState,
  (state: State): boolean => state.isLoading
);

export * from './user-profile.actions';

export interface IUserProfile {
  access_token: string;
  courses: gapi.client.classroom.Course[];
  data?: {};
  nextPageToken?: string;
  profile: GoogleBasicProfile;
  //viewedPlaylist?: string;
}

export interface GoogleBasicProfile {
  name?: string;
  imageUrl?: string;
}

const initialUserState: IUserProfile = {
  access_token: '',
  courses: [],
  data: {},
  nextPageToken: '',
  profile: {},
  //viewedPlaylist: ''
};
interface UnsafeAction {
  payload?: any;
  type: any;
}
export function user(
  state = initialUserState,
  action: UnsafeAction
): IUserProfile {
  switch (action.type) {
    case UserProfileActions.ADD_PLAYLISTS:
      return { ...state, courses: [...state.courses, ...action.payload] };

    case UserProfileActions.SET_PLAYLISTS:
      return { ...state, courses: action.payload };

    case UserProfileActions.UPDATE_TOKEN:
      return { ...state, access_token: action.payload, courses: [] };

    case UserProfileActions.USER_SIGNOUT_SUCCESS:
      return { ...initialUserState };

    case UserProfileActions.UPDATE:
      return { ...state, data: action.payload };

    case UserProfileActions.UPDATE_NEXT_PAGE_TOKEN:
      return { ...state, nextPageToken: action.payload };

    case UserProfileActions.UPDATE_USER_PROFILE:
      return { ...state, profile: action.payload };

    /*  case UserProfileActions.VIEWED_PLAYLIST:
       return { ...state, viewedPlaylist: action.payload }; */

    default:
      return state;
  }
}
