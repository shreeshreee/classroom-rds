import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { select, Store } from '@ngrx/store';

import { AppState } from '@rds-store/app.state';

import { isAdmin, isLoggedIn, isTeacher, selectUser } from '@rds-auth/state/auth.selectors';
import { signOut } from '@rds-auth/state/auth.actions';

import { UserDomain } from '@rds-admin/models/users-domain.model';

import { Observable, of, Subscription } from 'rxjs';

import { User } from '~/app/auth/models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user$: Observable<User>;
  userId: string;
  user: User;
  isOnline$: Observable<boolean>;
  isAdmin$: Observable<boolean>;
  isTeacher$: Observable<boolean>;
  userDomain: Observable<UserDomain>;
/*   userSub: Subscription;
 */  loading = false;
  constructor(
    private store: Store<AppState>,
    /* private router: ActivatedRoute,
    private userScoreService: UserScoresService */
  ) {
    this.user$ = this.store.pipe(select(selectUser));
    this.isOnline$ = store.pipe(select(isLoggedIn));
    this.isAdmin$ = store.pipe(select(isAdmin));
    this.isTeacher$ = store.pipe(select(isTeacher));
  }
  ngOnInit(): void {
  }
  logoutUser(user: User) {
    this.store.dispatch(signOut({ user }));
  }
  /*   ngOnDestroy() {
      this.userSub.unsubscribe();
    } */
}
