import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { select, Store } from '@ngrx/store';

import { AppState } from '@rds-store/app.state';

import { isAdmin, isLoggedIn, isTeacher, selectUser } from '@rds-auth/state/auth.selectors';
import { signOut } from '@rds-auth/state/auth.actions';

import { UserDomain } from '@rds-admin/models/users-domain.model';

import { User } from '@rds-auth/models/user.model';

import { SubscriptionService } from '@rds-shared/services/subscription.service';

import { UserEntityService } from '@rds-store/user/user-entity.service';

import { Observable, of, Subscription } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {
  user$: Observable<User>;
  userId: string;
  user: User;
  isOnline$: Observable<boolean>;
  loading$: Observable<boolean>
  isAdmin$: Observable<boolean>;
  isTeacher$: Observable<boolean>;
  userDomain: Observable<UserDomain>;
  userSub: Subscription;
  constructor(
    private store: Store<AppState>,
    private router: ActivatedRoute,
    private subService: SubscriptionService,
    private userEntityService: UserEntityService
  ) {
    //this.userSub = this.store.select(selectUser).subscribe(user => this.userId = user.id);
    this.loading$ = this.userEntityService.loading$;
    //this.user$ = this.userEntityService.entities$;
    this.userId = this.router.snapshot.paramMap.get('id');
    this.isOnline$ = store.pipe(select(isLoggedIn));
    this.isAdmin$ = store.pipe(select(isAdmin));
    this.isTeacher$ = store.pipe(select(isTeacher));
  }
  ngOnInit(): void {
    this.user$ = this.userEntityService.entities$
      .pipe(
        take(1),
        map(user => {
          return user.find(x => x.id == this.userId);
        })
      );
  }
  logoutUser(user: User) {
    this.store.dispatch(signOut({ user }));
  }
  ngOnDestroy() {
    this.subService.unsubscribeComponent$;
  }
}
