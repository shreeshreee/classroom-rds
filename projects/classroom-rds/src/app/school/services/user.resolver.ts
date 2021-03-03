import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs';
import { filter, first, map, takeUntil, tap } from 'rxjs/operators';

import { SubscriptionService } from './../../shared/services/subscription.service';

import { UserEntityService } from '~/app/store/user/user-entity.service';


@Injectable()
export class UserResolver implements Resolve<boolean> {

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
            this.userEntityService.getAll().pipe(takeUntil(this.subService.unsubscribe$));
          }
        }),
        filter(loaded => !!loaded),
        first()
      );
  }
}
