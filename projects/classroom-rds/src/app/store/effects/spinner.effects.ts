import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { NgxSpinnerService } from 'ngx-spinner';

import { tap } from 'rxjs/operators';

import * as fromAppActions from './../actions/app.actions';
import * as fromAuthActions from './../../auth/state/auth.actions';
import * as fromCoursesActions from './../../courses/state/courses.actions';

@Injectable()
export class SpinnerEffects {
  spinneron$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          fromAppActions.loadApp,
          fromAuthActions.signIn,
          fromCoursesActions.loadCourses,
          fromAuthActions.updateProfile,
        ),
        tap(() => this.spinner.show())
      ),
    { dispatch: false }
  );

  spinneroff$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          fromAppActions.loadAppFail,
          fromAppActions.loadAppSuccess,
          fromAuthActions.signInSuccess,
          fromAuthActions.signInFailure,
          fromCoursesActions.loadCoursesFail,
          fromCoursesActions.loadCoursesSuccess,
          fromAuthActions.updateProfileSuccess,
        ),
        tap(() => {
          setTimeout(() => {
            this.spinner.hide();
          }, 200);
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions, private spinner: NgxSpinnerService
  ) { }
}
