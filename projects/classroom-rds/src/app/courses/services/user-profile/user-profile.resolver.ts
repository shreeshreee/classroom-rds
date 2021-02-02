import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';

import { Observable, of } from 'rxjs';
import { filter, first, tap } from 'rxjs/operators';

import { UserProfileEntityService } from './../../../store/user-profile/user-profile-entity.service';

@Injectable()
export class UserProfilesResolver implements Resolve<boolean> {

  constructor(
    private userProfileEntityService: UserProfileEntityService,
  ) { }
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.userProfileEntityService.loading$
      .pipe(
        tap(loading => {
          if (!loading) {
            this.userProfileEntityService.getWithQuery(route.paramMap.get('courseId'));
          }
        }),
        filter(loading => !!loading),
        first()
      );

  }
}
