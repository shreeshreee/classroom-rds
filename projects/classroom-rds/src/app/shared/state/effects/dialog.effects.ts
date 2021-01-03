import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { tap } from "rxjs/operators";
import * as fromAuthActions from './../../../auth/state/auth.actions';

@Injectable()
export class DialogEffects {
  hideDialog$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthActions.signIn),
        tap(() => this.dialog.closeAll())
      ),
    { dispatch: false }
  );
  constructor(
    private actions$: Actions,
    private dialog: MatDialog
  ) { }
}
