import { Component, OnInit } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { User } from '@rds-auth/models/user.model';

import { AppState } from '@rds-store/app.state';

import { selectUser } from '@rds-auth/state/auth.selectors';
import { signOut } from '@rds-auth/state/auth.actions';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user$: Observable<User>;
  constructor(
    private store: Store<AppState>
  ) {
    this.user$ = this.store.pipe(select(selectUser));
  }
  ngOnInit(): void {
  }
  logoutUser(user: User) {
    this.store.dispatch(signOut({ user }));
  }
}
