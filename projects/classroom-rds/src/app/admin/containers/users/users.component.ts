import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { UserDomainEntityService } from '@rds-admin/state/user-domain/user-domain-entity.service';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AdminFireService } from '../../services';

import { UserDomain } from '~/app/admin/models/users-domain.model';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersComponent implements OnInit {
  users$: Observable<UserDomain[]>;
  loaded$: Observable<boolean>;
  users: UserDomain[];
  constructor(
    private userDomainEntityService: UserDomainEntityService,
    private adminFireService: AdminFireService
  ) {
    this.loaded$ = this.userDomainEntityService.loaded$;
  }
  ngOnInit(): void {
    this.users$ = this.userDomainEntityService.entities$
      .pipe(map(users => {
        if (!users) {
          this.userDomainEntityService.getAll();
        }
        return users;
      }));
  }
  onDbBackup(users: UserDomain[]) {
    users.map(async user => {
      const userProfile = await (await gapi.client.classroom.userProfiles.get({ userId: user.id })).result;
      const newUser = { ...user, classroomPhotoUrl: userProfile.photoUrl, permissions: userProfile.permissions || null, isTeacher: userProfile.verifiedTeacher || false }
      await this.adminFireService.createUser(newUser)
    });
  }
}
