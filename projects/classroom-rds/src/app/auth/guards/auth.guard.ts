import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

import { Observable, of } from 'rxjs';
import { catchError, switchMap, take } from 'rxjs/operators';

import { AuthFireService } from '../services';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authFireService: AuthFireService,
    private router: Router
  ) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authFireService.afAuth.authState
      .pipe(
        take(1),
        switchMap((user) => {
          if (!user) {
            this.router.navigateByUrl('/login');
            return of(false);
          }
          return of(true);
        }),
        catchError(() => {
          this.router.navigateByUrl('/login');
          return of(false);
        })
      );
  }

}
