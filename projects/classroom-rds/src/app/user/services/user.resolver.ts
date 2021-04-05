import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { Observable, Subscription } from 'rxjs';
import { filter, first, tap } from 'rxjs/operators';

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
