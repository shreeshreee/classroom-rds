import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { AppState } from './store/app.state';
import { User } from './auth/models/user.model';
import { browserReload } from './auth/state/auth.actions';
import { selectIsLoggedIn, selectUser, selectIsAdmin } from './auth/state/auth.selectors';
import * as fromAppActions from './store/actions/app.actions';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'classroom-rds';
  user$: Observable<User>;
  isOnline$: Observable<boolean>;
  isAdmin$: Observable<boolean>;
  constructor(
    private store: Store<AppState>
  ) {
    const user: User = JSON.parse(localStorage.getItem('user'));
    if (user) {
      this.store.dispatch(browserReload({ user }));
    }
    this.store.dispatch(fromAppActions.loadApp());
    this.isOnline$ = this.store.select(selectIsLoggedIn);
    this.user$ = this.store.select(selectUser);
    this.isAdmin$ = this.store.select(selectIsAdmin);
  }
  ngOnInit(): void {

  }
}
