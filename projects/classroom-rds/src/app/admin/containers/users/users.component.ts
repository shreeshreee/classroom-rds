import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { UserDomain } from '@rds-admin/models/users.model';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { UserDomainEntityService } from '../../state/user-domain-entity.service';


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
