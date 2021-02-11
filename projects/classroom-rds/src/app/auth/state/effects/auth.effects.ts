import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { UserProfileEntityService } from '@rds-store/user-profile/user-profile-entity.service';
import * as fromAppActions from '@rds-store/app/actions/app.actions';

import { of, Observable, defer, from } from 'rxjs';
import { switchMap, map, catchError, take } from 'rxjs/operators';

import { checkTeacherRole } from './../auth.actions';
import * as fromAuthActions from '../auth.actions';
import { isTeacher, isAdmin } from './../auth.selectors';
import { AuthFireService } from '../../services';
import { User } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';
@Injectable()
export class AuthEffects {

  signIn$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthActions.signIn),
        switchMap(() => this.authService.handleSignInClick()
          .pipe(
            map((res) => {
              //console.log(res)
              return {
                id: res.user.providerData[0].uid,
                name: res.user.displayName,
                //givenName: res.additionalUserInfo.profile.given_name,
                //familyName: res.additionalUserInfo.family_name,
                email: res.user.email,
                photoUrl: (res.user.photoURL) ? (res.user.photoURL) : res.user.providerData[0].photoURL,
                isNew: res.additionalUserInfo.isNewUser,
                isVerified: res.user.emailVerified,
                creationTime: res.user.metadata.creationTime,
                lastLogin: res.user.metadata.lastSignInTime,
                uid: res.user.uid
              };
            }),
            switchMap((user: User) => {
              if (user.isNew) {
                return [
                  fromAuthActions.saveUser({ user }),
                  fromAuthActions.signInSuccess({ user }),
                ];
              } else {
                return [
                  fromAuthActions.signInSuccess({ user }),
                ];
              }
            }),
            catchError((err) => of(fromAuthActions.authError({ error: err })))
          )
        )
      )
  );

  signInSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthActions.signInSuccess),
        switchMap((action) => {
          return [
            fromAuthActions.updateOnlineStatus({ uid: action.user.uid, isOnline: true }),
            fromAuthActions.checkAdminRole({ uid: action.user.uid }),
            fromAuthActions.checkTeacherRole({ id: action.user.uid }),
            fromAppActions.localStoreUser({ user: action.user })
          ];
        })
      ),
  );

  signOut$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthActions.signOut),
        switchMap((action) =>
          from(this.authService.signOut(action.user.uid))
            .pipe(
              map(() => fromAuthActions.signOutCompleted()),
              catchError((err) => of(fromAuthActions.authError({ error: err })))
            )
        )
      ),
    //{ dispatch: false }
  );

  getUser$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthActions.getUser),
        switchMap(() => this.authFireService.user$
          .pipe(
            take(1),
            map((authData: any) => {
              if (authData) {
                //console.log(authData)
                const user = {
                  id: authData.user.providerData[0].uid,
                  name: authData.user.displayName,
                  givenName: authData.additionalUserInfo.profile.given_name,
                  familyName: authData.additionalUserInfo.family_name,
                  email: authData.user.email,
                  photoUrl: authData.user.photoURL,
                  isTeacher: authData.isTeacher,
                  isAdmin: authData.isAdmin,
                  isNew: authData.additionalUserInfo.isNewUser,
                  isVerified: authData.user.emailVerified,
                  creationTime: authData.user.metadata.creationTime,
                  lastLogin: authData.user.metadata.lastSignInTime,
                  uid: authData.user.uid
                };
                return fromAuthActions.signInSuccess({ user });
              } else {
                return fromAuthActions.signInFailure({ error: authData });

              }
            }),
            catchError((error) => of(fromAuthActions.authError({ error })))
          )
        )
      ),
  );


  init$: Observable<any> = defer(() => {
    return of(fromAuthActions.getUser());
  });

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private authFireService: AuthFireService,
  ) { }
}
