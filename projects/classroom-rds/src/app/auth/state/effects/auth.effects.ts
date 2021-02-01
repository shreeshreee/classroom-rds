import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { of, Observable, defer, from } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

import * as fromAuthActions from '../auth.actions';
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
              return {
                id: res.user.providerData[0].uid,
                name: res.user.displayName,
                email: res.user.email,
                photoUrl: res.user.photoURL,
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

  init$: Observable<any> = defer(() => {
    return of(fromAuthActions.getUser());
  });

  constructor(
    private actions$: Actions,
    private authService: AuthService,
  ) { }
}
