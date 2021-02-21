import { Component } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { faCookieBite } from '@fortawesome/free-solid-svg-icons';

import { select, Store } from '@ngrx/store';

import { AppState } from '@rds-store/app.state';

import { User } from '@rds-auth/models/user.model';
import { signInSuccess } from '@rds-auth/state/auth.actions';
import * as fromAuthSelectors from '@rds-auth/state/auth.selectors';

import { loadApp } from '@rds-store/app/actions/app.actions';

import { Observable } from 'rxjs';

import { ThemeService } from './../../shared/services/theme.service';

import { LayoutService } from './layout.service';

import { ConfigComponent } from './config/config.component';
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
  isDarkTheme: Observable<boolean>;
  constructor(
    private layoutService: LayoutService,
    private store: Store<AppState>,
    private router: Router,
    private themeService: ThemeService,
    private dialog: MatDialog,
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
    switch (true) {
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
  }
  ngOnInit(): void {
    this.isDarkTheme = this.themeService.isDarkTheme;
  }
}
