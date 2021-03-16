import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { select, Store } from '@ngrx/store';

import { Observable, Subscription } from 'rxjs';
import { filter, first, map, take, takeUntil, tap } from 'rxjs/operators';

import { selectUser } from './../../auth/state/auth.selectors';
import { SubscriptionService } from '../../shared/services/subscription.service';

import { AppState } from '~/app/store/app.state';
import { UserEntityService } from '~/app/store/user/user-entity.service';


@Injectable()
export class UserResolver implements Resolve<boolean> {
  userId: string;
  subs: Subscription;
  constructor(
    private userEntityService: UserEntityService,
  ) { }
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.userEntityService.loading$
      .pipe(
        tap(loaded => {
          if (!loaded) {
            this.userEntityService.getByKey(route.paramMap.get('id'));
          }
        }),
        filter(loaded => !!loaded),
        first()
      );
  }
}
