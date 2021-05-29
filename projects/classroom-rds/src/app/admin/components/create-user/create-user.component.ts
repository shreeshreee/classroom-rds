import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { Grade } from '@rds-user/models/grade.model';

import { UserDomainEntityService } from '@rds-admin/state/user-domain/user-domain-entity.service';

import { from, Observable, of } from 'rxjs';

import { UserDomain } from './../../models/users-domain.model';
import { AdminApiService } from '../../services/admin-api.service';
import { CourseLevel, SchoolLevel } from './../../../auth/models/user.enum';

@Component({
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  faTimes = faTimes;
  hide: boolean = false;
  newUser: Observable<UserDomain>;
  clevelKeys;
  clevels = CourseLevel;
  slevelKeys;
  slevels = SchoolLevel;
  constructor(
    private dialogRef: MatDialogRef<CreateUserComponent>,
    private userDomainEntityService: UserDomainEntityService,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    this.clevelKeys = Object.keys(this.clevels).filter(Number);
    this.slevelKeys = Object.keys(this.slevels).filter(x => x.length > 5);
  }

  ngOnInit(): void {
  }

  onClose() {
    this.dialogRef.close(this.data);
  }

}
