import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs';
import { filter, first, map, tap } from 'rxjs/operators';

import { loadCoursesSuccess } from './../../state/courses.actions';
import { CourseEntityService } from '../../../store/course/course-entity.service';

@Injectable()
export class CoursesResolver implements Resolve<boolean> {

  constructor(
    private courseEntityService: CourseEntityService,
  ) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {

    return this.courseEntityService.loaded$
      .pipe(
        tap(loaded => {
          if (!loaded) {
            this.courseEntityService.getAll()
             /*  .pipe(
                map(courses =>
                  loadCoursesSuccess({ courses: courses })
                )
              ) */;
          }
        }),
        filter(loaded => !!loaded),
        first()
      );

  }
}
