import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs';
import { filter, first, tap } from 'rxjs/operators';

import { CourseEntityService } from '../../../store/course/course-entity.service';

@Injectable()
export class CourseResolver implements Resolve<boolean> {

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
            this.courseEntityService.getByKey(route.params.courseId);
          }
        }),
        filter(loaded => !!loaded),
        first()
      );

  }
}
