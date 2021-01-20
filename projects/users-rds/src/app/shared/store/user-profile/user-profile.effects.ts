
import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { get } from 'lodash';

import { of } from 'rxjs';
import { catchError, concatMap, map, switchMap, mergeMap } from 'rxjs/operators';

import * as userProfileActions from './user-profile.actions';

@Injectable()
export class UserProfileEffects {
  constructor(
    /* private dataService: DataService,
    private actions$: Actions,
    private commonService: CommonService,
    private userProfileAdapter: UserProfileAdapter,
    private dialogService: DialogService */
  ) { }

  /*  loadRequestEffect$ = createEffect(() =>
     this.actions$.pipe(
       ofType(userProfileActions.load),
       concatMap(() =>
         this.dataService.searchUserProfiles()
           .pipe(
             map(items =>
               userProfileActions.loadSuccess({
                 userProfiles: items.data.items.map(item => this.userProfileAdapter.adapt(item))
               })
             ),
             catchError(error => of(userProfileActions.actionFailure({ error })))
           )
       )
     )
   ); */

  /* searchUserProfilesEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(userProfileActions.searchUserProfiles),
      switchMap((action: any) => {
        delete action.type;
        return this.dataService.searchUserProfiles(action)
          .pipe(
            mergeMap(items => {
              return [
                userProfileActions.loadSuccess({
                  userProfiles: items ? items.data.items.map(item => this.userProfileAdapter.adapt(item)) : []
                }),
                userProfileActions.updateTotal({
                  total: items ? items.data.pagination.total : 0
                })
              ];
            }),
            catchError(error => of(userProfileActions.actionFailure({ error })))
          );
      })
    );
  }); */

  /*  createRequestEffect$ = createEffect(() =>
     this.actions$.pipe(
       ofType(userProfileActions.createUserProfile),
       concatMap((action: any) =>
         this.dataService.createUserProfile(action.userProfile)
           .pipe(
             map(response => {
               action.ref.close();
               this.commonService.formatDataResponse(response, true);
               return userProfileActions.actionSuccess({ msg: 'success' });
             }),
             catchError(error => of(userProfileActions.actionFailure({ error })))
           )
       )
     )
   ); */

  /* updateRequestEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userProfileActions.updateUserProfile),
      concatMap((action: any) =>
        this.dataService.updateUserProfile(action.userProfile)
          .pipe(
            map(response => {
              action.ref.close();
              this.commonService.formatDataResponse(response, true);
              return userProfileActions.actionSuccess({ msg: 'success' });
            }),
            catchError(error => {
              return of(userProfileActions.actionFailure({ error }));
            })
          )
      )
    )
  ); */

  /*  actionFailureEffect$ = createEffect(() =>
     this.actions$.pipe(
       ofType(userProfileActions.actionFailure),
       map((action: any) => {
         const errCode = get(action, 'error.status');
         if (COMMON_ERRORS.indexOf(errCode) === -1) {
           return this.dialogService.openWarningDialog(get(action, 'error.error.meta.message', 'Error Occurs!'));
         }
       })
     ),
     { dispatch: false }
   ); */

  /*  refreshEffect$ = createEffect(() =>
     this.actions$.pipe(
       ofType(userProfileActions.refresh),
       map(_ => userProfileActions.load())
     )
   ); */
}
