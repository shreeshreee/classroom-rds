import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { tap } from 'rxjs/operators';

import * as fromAuthActions from '../../auth/state/auth.actions';
@Injectable()
export class RouteEffects {

  goroot$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          fromAuthActions.signInSuccess),
        tap(() => this.router.navigate(['/']))
      ),
    { dispatch: false }
  );
  gohome$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          fromAuthActions.signOutCompleted),
        tap(() => this.router.navigate(['/home']))
      ),
    { dispatch: false }
  );
  constructor(
    private actions$: Actions,
    private router: Router,
    // private location: Location
  ) { }
}
