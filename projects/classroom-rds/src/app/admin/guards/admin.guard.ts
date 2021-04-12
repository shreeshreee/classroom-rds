import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { Store } from '@ngrx/store';

import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, take } from 'rxjs/operators';

import { AuthFireService } from './../../auth/services/auth-fire.service';
import { selectUser } from './../../auth/state/auth.selectors';

import { SnackService } from '~/app/shared/services';
import { AppState } from '~/app/store/app.state';
import { User } from '~/app/auth/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(
    private store: Store<AppState>,
    private router: Router,
    private authFireService: AuthFireService,
    private snackBar: SnackService,
  ) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {
    return this.store.select(selectUser)
      .pipe(
        take(1),
        switchMap((user: User) => {
          if (!user) {
            this.snackBar.justMessage('Inicia sesión con una cuenta con privilegios de administrador')
            this.router.navigateByUrl('/');
            return of(false);
          }
          return this.authFireService.checkAdminRole(user.id)
            .pipe(
              map(isAdmin => {
                if (isAdmin) {
                  return true;
                } else {
                  this.snackBar.justMessage('Tu cuenta no cuenta con las credenciales suficientes para esta sección')
                  this.router.navigateByUrl('/');
                  return false;
                }
              }),
              catchError(() => {
                this.snackBar.justMessage('Ha ocurrido un error')
                this.router.navigateByUrl('');
                return of(false);
              })
            );
        }),
      );
  }

}
