import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { QueryParams } from '@ngrx/data';

import { Observable, Subject } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { selectUser } from './../../../auth/state/auth.selectors';

import { SchoolLevel } from '~/app/admin/models/users-domain.model';
import { User } from '~/app/auth/models/user.model';
import { CourseLevel } from '~/app/classroom/models/classroom.enum';
import { SubscriptionService } from '~/app/shared/services/subscription.service';
import { UserEntityService } from '~/app/store/user/user-entity.service';

@Component({
  selector: 'app-school-students',
  templateUrl: './school-students.component.html',
  styleUrls: ['./school-students.component.scss']
})
export class SchoolStudentsComponent implements OnInit, OnDestroy {
  @Input() users$: Observable<User[]>;
  user$: Observable<User>;
  userSub: Subject<User> = new Subject<User>();
  loaded$: Observable<boolean>;
  searchForm: FormGroup;
  fullName: string;
  clevelKeys;
  clevels = CourseLevel;
  slevelKeys;
  slevels = SchoolLevel;
  raisedElev = 8;
  searching: boolean = false;
  constructor(
    private fb: FormBuilder,
    private subService: SubscriptionService,
    private userEntityService: UserEntityService,
  ) {
    this.initSearchForm();
    this.loaded$ = this.userEntityService.loaded$;
    this.clevelKeys = Object.keys(this.clevels).filter(Number);
    this.slevelKeys = Object.keys(this.slevels).filter(Number);
  }
  initSearchForm() {
    this.searchForm = this.fb.group({
      grade: new FormControl()
    })
  }

  ngOnInit(): void {
    this.onSearch();
  }
  sendUser(user: User) {
    this.userSub.next(user);
  }
  editUser(user: User) {
    console.log('Partial User:', user)
    // call action or service to edit user on DB
  }
  onSearch() {
    this.searchForm.get('grade').valueChanges.subscribe((grade: string) => {
      this.users$ = this.userEntityService.entities$
        .pipe(take(1), map(users => users.filter(x => x.grade == grade)))
    });
  }
  ngOnDestroy(): void {
    this.subService.unsubscribeComponent$.next();
  }
}
