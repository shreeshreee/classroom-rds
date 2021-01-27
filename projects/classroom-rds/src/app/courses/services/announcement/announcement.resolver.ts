import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';

import { Observable, of } from 'rxjs';
import { filter, first, map, tap } from 'rxjs/operators';

import { AnnouncementEntityService } from '../../../store/announcement/announcement-entity.service';
import { StudentEntityService } from '../../../store/student/student-entity.service';

@Injectable()
export class AnnouncementResolver implements Resolve<boolean> {
  constructor(
    private announcementES: AnnouncementEntityService,
  ) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.announcementES.loading$
      .pipe(
        tap(loading => {
          if (!loading) {
            this.announcementES.getWithQuery(route.paramMap.get('courseId'));
          }
        }),
        filter(loading => !!loading),
        first()
      );
  }
}
