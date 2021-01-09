
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { from, of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { CoursesService } from '../services/courses.service';
import { loadCourses, loadCoursesSuccess, loadCoursesFail } from './courses.actions';

@Injectable()
export class CoursesEffects {
  constructor(private coursesService: CoursesService, private actions$: Actions) { }

  public loadCourses$ = createEffect(
    () =>
      this.actions$
        .pipe(
          ofType(loadCourses),
          switchMap(action =>
            from(this.coursesService.getCourses(action.params.pageSize))
              .pipe(
                map((response) => loadCoursesSuccess({ courses: response })),
                catchError((error) => of(loadCoursesFail(error)))
              )
          )
        ),
  )
}
