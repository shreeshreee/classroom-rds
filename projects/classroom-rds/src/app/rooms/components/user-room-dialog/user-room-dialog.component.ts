import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { SchoolService } from '@rds-school/services/school.service';

import { RoomService } from '../../services/room.service';

@Component({
  templateUrl: './user-room-dialog.component.html',
  styleUrls: ['./user-room-dialog.component.scss']
})
export class UserRoomDialogComponent {
  labelOptions = ['purple', 'blue', 'green', 'yellow', 'red', 'gray'];
  faTimes = faTimes;
  constructor(
    public dialogRef: MatDialogRef<UserRoomDialogComponent>,
    private roomService: RoomService,
    private schoolService: SchoolService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  handleStudentDelete(): void {
    this.roomService.removeStudent(this.data.roomId, this.data.student);
    this.schoolService.updateUser(this.data.student.id, { grade: '' })
    this.dialogRef.close();
  }
  close() {
    this.dialogRef.close();
  }
}
