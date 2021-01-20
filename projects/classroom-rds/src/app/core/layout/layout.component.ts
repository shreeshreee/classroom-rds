import { Component } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent } from '@angular/router';

import { select, Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { AppState } from './../../store/app.state';
import { User } from '../../auth/models/user.model';
import { checkAdminRole, signInSuccess } from './../../auth/state/auth.actions';
import * as fromAuthSelectors from './../../auth/state/auth.selectors';
import { loadApp } from '../../store/actions/app.actions';

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
  loading = false;

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
