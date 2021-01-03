import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { AuthFireService } from '../../services/auth-fire.service';
import * as fromAuthActions from '../auth.actions';
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
              map((isAdmin: boolean) =>
                fromAuthActions.updateAdminRole({ isAdmin })
              ),
              catchError((error: any) => of(fromAuthActions.adminError({ error })))
            )
        )
      ),
    { dispatch: false }
  );
  updateOnlineStatus$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthActions.updateOnlineStatus),
        switchMap((action) =>
          this.authFireService.updateOnlineStatus(action.uid, action.isOnline)
            .pipe(
              catchError((error: any) => of(fromAuthActions.authError({ error })))
            )
        )
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private authFireService: AuthFireService,
  ) { }
}
