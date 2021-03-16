import { Component, OnInit } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { UserProfilesService } from '@rds-classroom/user-profiles/services/user-profiles.service';

import { User } from '@rds-auth/models/user.model';
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
  user$: Observable<User>;
  isOnline$: Observable<boolean>;
  isAdmin$: Observable<boolean>;
  isTeacher$: Observable<boolean>;

  constructor(private store: Store<AppState>,
    private userProfilesService: UserProfilesService
  ) { this.userProfilesService.handleClassroomLoad(); }

  ngOnInit() {
    this.user$ = this.store.pipe(select(fromAuthSelectors.selectUser));
    this.isOnline$ = this.store.pipe(select(fromAuthSelectors.isLoggedIn));
    this.isAdmin$ = this.store.pipe(select(fromAuthSelectors.isAdmin));
    this.isTeacher$ = this.store.pipe(select(fromAuthSelectors.isTeacher));
  }

  updateProfile(userData: User) {
    this.store.dispatch(fromAuthActions.updateProfile({ userData }));
  }

  logoutUser(user: User) {
    this.store.dispatch(fromAuthActions.signOut({ user }));
  }
}
