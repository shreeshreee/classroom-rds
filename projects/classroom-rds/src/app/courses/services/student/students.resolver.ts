import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';

import { Observable, of } from 'rxjs';
import { filter, first, map, tap } from 'rxjs/operators';

import { StudentEntityService } from '../../../store/student/student-entity.service';

@Injectable()
export class StudentsResolver implements Resolve<boolean> {
  constructor(
    private studentES: StudentEntityService,
  ) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.studentES.loading$
      .pipe(
        tap(loading => {
          if (!loading) {
            this.studentES.getWithQuery(route.paramMap.get('courseId'));
          }
        }),
        filter(loading => !!loading),
        first()
      );
  }
}
