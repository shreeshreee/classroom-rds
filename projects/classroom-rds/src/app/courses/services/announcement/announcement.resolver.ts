import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';

import { Observable } from 'rxjs';
import { filter, first, tap } from 'rxjs/operators';

import { AnnouncementEntityService } from './../../../store/announcement/announcement-entity.service';

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
            this.announcementES.getWithQuery(route.parent.paramMap.get('courseId'));
          }
        }),
        filter(loading => !!loading),
        first()
      );
  }
}
