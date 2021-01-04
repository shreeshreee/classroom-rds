import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { mergeMap, map, catchError, switchMap, tap } from 'rxjs/operators';
import { from, of } from 'rxjs';

import { CoursesService } from '../services/courses.service';
import * as fromAuthActions from './../../auth/state/auth.actions';

import * as fromCoursesActions from './courses.actions';
@Injectable()
export class CoursesEffects {

  loadCourses$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromCoursesActions.loadCourses),
        mergeMap(() =>
          from(this.courseService.getCoursesList())
            .pipe(
              map((courses: gapi.client.classroom.Course[]) =>
                fromCoursesActions.loadCoursesSuccess({ courses })
              ),
              catchError((err) =>
                of(fromCoursesActions.loadCoursesFail({ error: err }))
              )
            )
        )
      ),
  );

  constructor(
    private actions$: Actions,
    private courseService: CoursesService
  ) { }
}
