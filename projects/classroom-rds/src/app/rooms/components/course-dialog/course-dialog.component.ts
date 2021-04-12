import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { UserEntityService } from '@rds-store/user/user-entity.service';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { RoomService } from '../../services/room.service';

import { User } from '~/app/auth/models/user.model';


@Component({
  templateUrl: './course-dialog.component.html',
  styleUrls: ['./course-dialog.component.scss']
})
export class CourseDialogComponent implements OnInit {
  faTimes = faTimes;
  teachers$: Observable<User[]>;
  loading$: Observable<boolean>;
  constructor(
    private roomService: RoomService,
    public dialogRef: MatDialogRef<CourseDialogComponent>,
    private userEntityService: UserEntityService,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.loading$ = this.userEntityService.loading$;
    this.teachers$ = this.userEntityService.entities$.pipe(map(users => users.filter(x => x.isTeacher == true)))
  }

  ngOnInit(): void {
  }
  handleCourseDelete(): void {
    this.roomService.removeCourse(this.data.roomId, this.data.course);
    this.dialogRef.close();
  }

  close() {
    this.dialogRef.close();
  }
}
