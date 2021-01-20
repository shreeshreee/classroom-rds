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
  courseId: string;
  constructor(
    private studentEntityService: StudentEntityService,
  ) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.studentEntityService.loaded$
      .pipe(
        tap(loaded => {
          if (!loaded) {
            this.studentEntityService.getWithQuery(route.parent.params.courseId);
          }
        }),
        filter(loaded => !!loaded),
        first()
      );
  }
}
