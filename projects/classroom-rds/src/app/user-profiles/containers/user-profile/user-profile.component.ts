import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { UpdatedUser, User } from '@rds-auth/models/user.model';
import { signOut } from '@rds-auth/state/auth.actions';
import * as fromAuthActions from '@rds-auth/state/auth.actions';
import * as fromAuthSelectors from '@rds-auth/state/auth.selectors';

import { AppState } from '@rds-store/app.state';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  user$: Observable<User | null>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.user$ = this.store.select(fromAuthSelectors.selectUser);
  }

  updateProfile(userData: UpdatedUser) {
    this.store.dispatch(fromAuthActions.updateProfile({ userData }));
  }

  logoutUser(user: User) {
    this.store.dispatch(fromAuthActions.signOut({ user }));
  }
}
