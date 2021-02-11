import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';

import { Store } from '@ngrx/store';

import { selectUser } from '@rds-auth/state/auth.selectors';

import { AppState } from '@rds-store/app.state';
import { UserProfileEntityService } from '@rds-store/user-profile/user-profile-entity.service';

import { Observable, of } from 'rxjs';
import { filter, first, map, tap } from 'rxjs/operators';

@Injectable()
export class UserProfileResolver implements Resolve<boolean> {
  constructor(
    private userProfileES: UserProfileEntityService,
  ) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> {
    return this.userProfileES.loading$
      .pipe(
        tap(loading => {
          if (!loading) {
            this.userProfileES.getByKey(route.queryParamMap.get('id'));
          }
        }),
        filter(loading => !!loading),
        first()
      );
  }
}
