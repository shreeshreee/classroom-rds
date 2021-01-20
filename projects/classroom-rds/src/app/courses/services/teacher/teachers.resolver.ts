import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  ActivatedRoute
} from '@angular/router';

import { Observable, of } from 'rxjs';
import { filter, first, tap } from 'rxjs/operators';

import { TeacherEntityService } from '../../../store/teacher/teacher-entity.service';

@Injectable({
  providedIn: 'root'
})
export class TeachersResolver implements Resolve<boolean> {

  constructor(
    private teacherEntityService: TeacherEntityService,
  ) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.teacherEntityService.loaded$
      .pipe(
        tap(loaded => {
          if (!loaded) {
            const id =
              this.teacherEntityService.getWithQuery(route.parent.params.courseId);
          }
        }),
        filter(loaded => !!loaded),
        first()
      );

  }
}
