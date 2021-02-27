import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

import { select, Store } from '@ngrx/store';

import { User } from '@rds-auth/models/user.model';

import { AppState } from '@rds-store/app.state';

import { isAdmin, isLoggedIn, isTeacher, selectUser } from '@rds-auth/state/auth.selectors';
import { signOut } from '@rds-auth/state/auth.actions';

import { UserDomain } from '@rds-admin/models/users-domain.model';

import { from, merge, Observable, of, Subscription } from 'rxjs';
import { mergeMap, concatMap, map, switchMap } from 'rxjs/operators';

import { UserDto } from '../../models/user-dto';
import { UserScoresService } from './../../services/user-scores.service';

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
  userDto: Observable<UserDto>;
  userSub: Subscription;
  loading = false;
  constructor(
    private store: Store<AppState>,
    private router: ActivatedRoute,
    private userScoreService: UserScoresService
  ) {
    this.store.select(selectUser).subscribe(user => {
      this.user = user
    });
    this.isOnline$ = store.pipe(select(isLoggedIn));
    this.isAdmin$ = store.pipe(select(isAdmin));
    this.isTeacher$ = store.pipe(select(isTeacher));
    //this.router.snapshot.paramMap.get('userId')
    //router.data.subscribe(data => this.userDto = data);
    this.userDto = this.userScoreService.getUserDomain(this.user.id)
      .pipe(
        map(data => {
          let dto: UserDto = {
            addresses: data.addresses,
            creationTime: data.creationTime,
            emails: data.emails,
            gender: data.gender,
            id: this.user.id,
            isAdmin: data.isAdmin,
            isTeacher: this.user.isTeacher,
            isNew: this.user.isNew,
            isOnline: this.user.isOnline,
            isVerified: this.user.isVerified,
            lastLoginTime: data.lastLoginTime,
            name: data.name,
            notes: data.notes,
            phones: data.phones,
            photoUrl: this.user.photoUrl,
            primaryEmail: data.primaryEmail,
            suspended: data.suspended,
            suspensionReason: data.suspensionReason,
            thumbnailPhotoUrl: data.thumbnailPhotoUrl,
            uid: this.user.uid
          }
          return dto;
        })
      );

  }
  ngOnInit(): void {
  }
  logoutUser(user: User) {
    this.store.dispatch(signOut({ user }));
  }
}
