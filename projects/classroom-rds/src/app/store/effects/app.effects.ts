import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { from, of } from 'rxjs';

import * as fromAppActions from './../actions/app.actions';
import { AuthService } from './../../auth/services';
import * as fromAuthActions from './../../auth/state/auth.actions';


@Injectable()
export class AppEffects {
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


  /*  initClassroomClient$ = createEffect(
     () =>
       this.actions$.pipe(
         ofType(fromAppActions.loadApp),
         switchMap(() => from(this.googleApiService.initClient())
           .pipe(
             map((message) =>
               fromAppActions.loadAppSuccess({ message })
             )
           )
         )
       ),
   ); */
  loadApp$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAppActions.loadApp),
        switchMap(() => of(this.authService.handleClientLoad())
          .pipe(
            map(() => fromAppActions.loadAppSuccess()),
            catchError((err) => of(fromAppActions.loadAppFail(err)))
          )
        )
      ),
  );
  constructor(
    private actions$: Actions,
    private authService: AuthService,

  ) { }
}
