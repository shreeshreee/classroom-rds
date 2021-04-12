import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { SubscriptionService } from '@rds-shared/services';

import { UserEntityService } from '@rds-store/user/user-entity.service';

import { Observable } from 'rxjs';
import { filter, first, map, takeUntil, tap } from 'rxjs/operators';


@Injectable()
export class UsersResolver implements Resolve<boolean> {
  usersOnline: number = 0;
  constructor(
    private userEntityService: UserEntityService,
    private subService: SubscriptionService) { }
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.userEntityService.loaded$
      .pipe(
        tap(loaded => {
          if (!loaded) {
            this.userEntityService.getAll().pipe(takeUntil(this.subService.unsubscribe$)).pipe(map(users => users.filter(users => users.isTeacher == true)));
          }
        }),
        filter(loaded => !!loaded),
        first()
      );
  }
}
