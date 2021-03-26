import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { faCircle } from '@fortawesome/free-solid-svg-icons';

import { Observable, Subject, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '~/app/auth/models/user.model';
import { SubscriptionService } from '~/app/shared/services/subscription.service';
import { UserEntityService } from '~/app/store/user/user-entity.service';

@Component({
  selector: 'app-school-teachers',
  templateUrl: './school-teachers.component.html',
  styleUrls: ['./school-teachers.component.scss']
})
export class SchoolTeachersComponent implements OnInit {
  users$: Observable<User[]>;
  faCircle = faCircle;
  loaded$: Observable<boolean>;

  constructor(

    private subService: SubscriptionService,
    private userEntityService: UserEntityService,
  ) {
    this.loaded$ = this.userEntityService.loaded$;

  }

  ngOnInit(): void {
    this.users$ = this.userEntityService.entities$.pipe(map(users => users.filter(u => u.isTeacher == true)))
  }

}
