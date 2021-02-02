import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';

import { Observable, of } from 'rxjs';
import { filter, first, map, tap } from 'rxjs/operators';

import { CourseWorkEntityService } from './../../../store/course-work/course-work-entity-service.service';


@Injectable()
export class CourseWorksResolver implements Resolve<boolean> {
  constructor(
    private courseWorkES: CourseWorkEntityService,
  ) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.courseWorkES.loading$
      .pipe(
        tap(loading => {
          if (!loading) {
            this.courseWorkES.getWithQuery(route.parent.paramMap.get('courseId'));
          }
        }),
        filter(loading => !!loading),
        first()
      );
  }
}
