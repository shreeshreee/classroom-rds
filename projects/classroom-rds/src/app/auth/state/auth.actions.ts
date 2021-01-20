import { createAction, props } from '@ngrx/store';

import { User, UpdatedUser } from '../models/user.model';

export const addAdminPrivileges = createAction('[Auth Component] Add user admin privileges', props<{ uid: string }>());
export const adminError = createAction('[Auth Component] Check user admin error', props<{ error: any }>());
export const authError = createAction('[Auth Component] Authorization error', props<{ error: any }>());
export const checkAdminRole = createAction('[Auth Effect] Check admin role', props<{ uid: string }>());
export const checkUser = createAction('[Auth Effect] Check current user',);
export const getUser = createAction('[Auth Effect] Get current user');
export const removeAdminPrivileges = createAction('[Auth Component] Remove user admin privileges', props<{ uid: string }>());
export const saveUser = createAction('[Auth Effect] Save user to firestore', props<{ user: User }>());
export const signIn = createAction('[Auth Effect] Google`s sign-in request',);
export const signInFailure = createAction('[Auth Effect] Google`s sign-in Fail', props<{ error: any }>());
export const signInSuccess = createAction('[Auth Effect] Google`s sign-in Success', props<{ user: User }>());
export const signOut = createAction('[Auth Effect] Google`s sign-out request', props<{ user: User }>());
export const signOutCompleted = createAction('[Auth Effect] Google`s sign-out completed');
export const updateAdminRole = createAction('[Auth Component] Update admin role', props<{ isAdmin: boolean }>());
export const updateOnlineStatus = createAction('[Auth Component] Update user online status', props<{ uid: string; isOnline: boolean }>());
export const updateProfile = createAction('[Auth Component] Update profile', props<{ userData: UpdatedUser }>());
export const updateProfileSuccess = createAction('[Auth Component] Update profile success', props<{ user: User }>());
