import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { UserEntityService } from '~/app/store/user/user-entity.service';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.scss']
})
export class SchoolComponent implements OnInit {
  usersOnline: Observable<number>;

  constructor(
    private userEntityService: UserEntityService,
  ) {
    this.usersOnline = this.userEntityService.entities$
      .pipe(
        map(users => {
          let count: number = 0;
          users.forEach(user => {
            if (user.isOnline) { count++ }
          });
          return count;
        })
      );
  }

  ngOnInit(): void {
  }

}
