import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import * as fromAuthActions from '../auth.actions';
import { User } from '../../models/user.model';
import { AuthFireService } from '../../services/auth-fire.service';
@Injectable()
export class FireEffects {

  saveUser$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthActions.saveUser),
        tap(action =>
          this.authFireService.createUser(action.user)
        )
      ),
    { dispatch: false }
  );

  checkAdminRole$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthActions.checkAdminRole),
        switchMap((action) =>
          this.authFireService.checkAdminRole(action.uid)
            .pipe(
              map((isAdmin: boolean) => fromAuthActions.updateAdminRole({ isAdmin }))
            )
        )
      ),
  );

  updateProfile$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthActions.updateProfile),
        switchMap((action) =>
          this.authFireService.updateUser(action.userData)
            .pipe(
              map(() => {
                const currentUser: any = this.authFireService.user$;
                const updatedUser: User = {
                  id: currentUser.id,
                  uid: currentUser.uid,
                  name: currentUser.name,
                  email: currentUser.email,
                  photoUrl: currentUser.photoURL,
                  isAdmin: currentUser.isAdmin,
                  isOnline: currentUser.isOnline,
                  isNew: currentUser.isNew,
                };
                return fromAuthActions.updateProfileSuccess({ user: updatedUser });
              }),
              catchError((err) => of(fromAuthActions.authError({ error: err })))
            )
        )
      ),
  );

  updateOnlineStatus$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthActions.updateOnlineStatus),
        switchMap((action) =>
          this.authFireService.updateOnlineStatus(action.uid, action.isOnline)
        )
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private authFireService: AuthFireService,
  ) { }
}
