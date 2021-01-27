
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { UserProfile } from '../../../core/models/user-profile.model';

export const entitySelectId = 'url';
export const entityCollectionName = 'UserProfile';
export const pluralizedEntityName = 'userprofiles';
export const entityCollectionEndPoint = pluralizedEntityName;


export const userProfileAdapter: EntityAdapter<UserProfile> = createEntityAdapter<UserProfile>({
  selectId: model => model.id
});
export interface State extends EntityState<UserProfile> {
  isLoading?: boolean;
  error?: any;
  total?: number;
  selectedUserProfileId?: string | number;
}

export const initialState: State = userProfileAdapter.getInitialState({
  isLoading: false,
  error: null,
  selectedUserProfileId: null,
  total: 0
});
