import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { UpdatedUser, User } from './../../models/user.model';
import { signOut } from './../../state/auth.actions';
import * as fromAuthActions from './../../state/auth.actions';
import * as fromAuthSelectors from './../../state/auth.selectors';
import { AppState } from './../../../store/app.state';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
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
