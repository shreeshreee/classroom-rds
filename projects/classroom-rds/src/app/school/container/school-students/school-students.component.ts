import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit, OnDestroy, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { faCircle } from '@fortawesome/free-solid-svg-icons';

import * as school from '@rds-auth/models/school.json';

import { Observable, Subject } from 'rxjs';
import { map, take, catchError } from 'rxjs/operators';

import { CourseLevel, SchoolLevel } from '~/app/auth/models/user.enum';
import { User } from '~/app/auth/models/user.model';
import { Parent } from '~/app/school/models/parent.model';
import { SubscriptionService } from '~/app/shared/services/subscription.service';
import { UserEntityService } from '~/app/store/user/user-entity.service';

@Component({
  selector: 'app-school-students',
  templateUrl: './school-students.component.html',
  styleUrls: ['./school-students.component.scss']
})
export class SchoolStudentsComponent implements OnInit, OnDestroy {
  @Input() users$: Observable<User[]>;
  activeClass: string;
  userSub: Subject<Partial<User>> = new Subject<Partial<User>>();
  loading$: Observable<boolean>;
  searchForm: FormGroup;
  fullName: string;
  clevelKeys;
  clevels = CourseLevel;
  slevelKeys;
  slevels = SchoolLevel;
  raisedElev = 8;
  searching: boolean = false;
  hidden: boolean = false;
  faCircle = faCircle;
  constructor(
    private fb: FormBuilder,
    private snackbar: MatSnackBar,
    private subService: SubscriptionService,
    private userEntityService: UserEntityService,
  ) {
    this.initSearchForm();
    this.loading$ = this.userEntityService.loading$;
    this.clevelKeys = Object.keys(this.clevels).filter(Number);
    this.slevelKeys = Object.keys(this.slevels).filter(x => x.length > 5);
  }
  initSearchForm() {
    this.searchForm = this.fb.group({
      grade: new FormControl()
    })
  }

  ngOnInit(): void {

  }
  getUserCount() {

  }
  sendUser(user: Partial<User>) {
    this.userSub.next(user);
  }
  editUser(user: Partial<User>) {
    //console.log('Partial User:', user)
    this.userEntityService.update(user).subscribe(() => this.snackbar.open('Usuario actualizado', 'ok', { duration: 1000 }), (error: any) => this.snackbar.open(`Error ${error}`, 'ok'));
    this.searchForm.get('grade').valueChanges.subscribe((grade: string) => {
      this.users$ = this.userEntityService.entities$
        .pipe(map(users => users.filter(x => x.grade == grade)))
    });
    // call action or service to edit user on DB
  }
  onSearch(grade) {
    this.userEntityService.getWithQuery({ grade });
    this.users$ = this.userEntityService.entities$.pipe(map(users => users.filter(x => x.grade == grade).sort((a, b) => this.compare(a.name.familyName, b.name.familyName, true))))
  }
  /** Simple sort comparator for example ID/Name columns (for client-side sorting). */
  compare(a: string | number, b: string | number, isAsc: boolean): number {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
  ngOnDestroy(): void {
    this.subService.unsubscribeComponent$.next();
    this.userSub.unsubscribe();
  }
}
