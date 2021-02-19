import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { UserDomainEntityService } from '@rds-admin/state/user-domain/user-domain-entity.service';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
  constructor(
    private userDomainEntityService: UserDomainEntityService,
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

}
