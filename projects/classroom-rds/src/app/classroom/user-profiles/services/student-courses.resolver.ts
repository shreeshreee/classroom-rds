import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';

import { Observable, of } from 'rxjs';
import { filter, first, map, tap } from 'rxjs/operators';

import { CourseEntityService } from '~/app/store/course/course-entity.service';


@Injectable()
export class StudentCoursesResolver implements Resolve<boolean> {
  constructor(
    private courseES: CourseEntityService,
  ) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.courseES.loading$
      .pipe(
        tap(loading => {
          if (!loading) {
            this.courseES.getWithQuery({ studentId: route.paramMap.get('studentId') });
          }
        }),
        filter(loading => !!loading),
        first()
      );
  }
}
