import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { of, Observable, defer } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';

import * as fromAuthActions from '../auth.actions';
@Injectable()
export class AuthEffects {

  signIn$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthActions.signIn),
        switchMap(() => this.authService.handleSignInClick()
          .pipe(
            map((res) => {
              return {
                id: res.user.providerData[0].uid,
                name: res.user.displayName,
                email: res.user.email,
                photoUrl: res.user.providerData[0].photoURL,
                isNew: res.additionalUserInfo.isNewUser,
                isVerified: res.user.emailVerified,
                creationTime: res.user.metadata.creationTime,
                lastLogin: res.user.metadata.lastSignInTime,
                uid: res.user.uid
              };
            }),
            switchMap((user) => {
              if (user.isNew) {
                return [
                  fromAuthActions.signInSuccess({ user }),
                  fromAuthActions.saveUser({ user }),
                ];
              } else {
                return [
                  fromAuthActions.signInSuccess({ user }),
                  fromAuthActions.checkAdminRole({ uid: user.uid }),
                ];
              }
            }),
            catchError((err) => {
              return of(fromAuthActions.signInFailure({ error: err }));
            })
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
          ];
        })
      ),
  );

  signOut$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthActions.signOut),
        switchMap((action) =>
          this.authService.signOut()
            .pipe(
              map(() => fromAuthActions.updateOnlineStatus({ uid: action.user.uid, isOnline: action.user.isOnline })),
              map(() => fromAuthActions.signOutCompleted())
            )
        )
      )
  );

  init$: Observable<any> = defer(() => {
    return of(fromAuthActions.getUser());
  });

  constructor(
    private actions$: Actions,
    private authService: AuthService,
  ) { }
}
