import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

import { select, Store } from '@ngrx/store';

import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

import { isLoggedIn } from '../state/auth.selectors';
import { AppState } from './../../store/app.state';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private store: Store<AppState>,
    private router: Router
  ) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    return this.store
      .pipe(
        select(isLoggedIn),
        tap(loggedIn => {
          if (!loggedIn) {
            this.router.navigateByUrl('/');
          }
        })
      )
  }
}
