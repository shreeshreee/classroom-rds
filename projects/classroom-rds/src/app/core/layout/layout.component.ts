import { Component } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent } from '@angular/router';

import { faCookieBite } from '@fortawesome/free-solid-svg-icons';

import { select, Store } from '@ngrx/store';

import { AppState } from '@rds-store/app.state';

import { User } from '@rds-auth/models/user.model';
import { signInSuccess } from '@rds-auth/state/auth.actions';
import * as fromAuthSelectors from '@rds-auth/state/auth.selectors';

import { loadApp } from '@rds-store/app/actions/app.actions';

import { Observable } from 'rxjs';

import { LayoutService } from './layout.service';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  isHandset$: Observable<boolean>;
  user$: Observable<User>;
  isOnline$: Observable<boolean>;
  isAdmin$: Observable<boolean>;
  isTeacher$: Observable<boolean>;
  loading = false;
  faCookieBite = faCookieBite;
  dismissible = true;
  alert: any = {
    type: 'success',
    msg: `Sigue <strong>en vivo</strong> la transmisión de la elaboración <strong>galletas</strong> del día del amor y la amistad. <strong>Pulsa esta notificación</strong>.`
  };
  constructor(
    private layoutService: LayoutService,
    private store: Store<AppState>,
    private router: Router,
  ) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event)
    });

    const user: User = JSON.parse(localStorage.getItem('user'));
    if (user) {
      this.store.dispatch(signInSuccess({ user }));
    }
    this.store.dispatch(loadApp());
    this.isHandset$ = this.layoutService.isHandset$
    this.isOnline$ = this.store.pipe(select(fromAuthSelectors.isLoggedIn));
    this.user$ = this.store.pipe(select(fromAuthSelectors.selectUser));
    this.isAdmin$ = this.store.pipe(select(fromAuthSelectors.isAdmin));
    this.isTeacher$ = this.store.pipe(select(fromAuthSelectors.isTeacher));
  }
  // Shows and hides the loading spinner during RouterEvent changes
  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.loading = true
    }
    if (event instanceof NavigationEnd) {
      this.loading = false
    }
    // Set loading state to false in both of the below events to hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      this.loading = false
    }
    if (event instanceof NavigationError) {
      this.loading = false
    }
    /* switch (true) {
     case event instanceof NavigationStart: {
       this.loading = true;
       break;
     }
     case event instanceof NavigationEnd:
     case event instanceof NavigationCancel:
     case event instanceof NavigationError: {
       this.loading = false;
       break;
     }
     default: {
       break;
     }
   }
 });*/
  }
  ngOnInit(): void { }

}
