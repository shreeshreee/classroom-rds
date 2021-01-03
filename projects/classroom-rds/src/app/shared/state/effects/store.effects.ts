import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { tap } from "rxjs/operators";
import * as fromAuthActions from './../../../auth/state/auth.actions'
@Injectable()
export class StoreEffects {
  constructor(
    private actions$: Actions,
  ) { }
  storeUser$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthActions.signInSuccess),
        tap((action) =>
          localStorage.setItem('user', JSON.stringify(action.user))
        )
      ),
    { dispatch: false }
  );
  removeUser$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthActions.signOutCompleted),
        tap(() => localStorage.removeItem('user'))
      ),
    { dispatch: false }
  );
}
