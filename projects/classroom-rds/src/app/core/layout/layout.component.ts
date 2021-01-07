import { Component } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';

import { select, Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { AppState } from './../../store/app.state';
import { User } from '../../auth/models/user.model';
import { browserReload } from '../../auth/state/auth.actions';
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
  constructor(
    private layoutService: LayoutService,
    private store: Store<AppState>,
  ) {
    const user: User = JSON.parse(localStorage.getItem('user'));
    if (user) {
      this.store.dispatch(browserReload({ user }));
    }
    this.store.dispatch(loadApp());
    this.isHandset$ = this.layoutService.isHandset$
    this.isOnline$ = this.store.pipe(select(fromAuthSelectors.isLoggedIn));
    this.user$ = this.store.pipe(select(fromAuthSelectors.selectUser));
    this.isAdmin$ = this.store.pipe(select(fromAuthSelectors.isAdmin));
  }
  ngOnInit(): void { }

}
