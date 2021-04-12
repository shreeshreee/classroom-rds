import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { SchoolLevel } from '~/app/auth/models/user.enum';
import { ClassState } from '~/app/school/models/class.model';

@Component({
  templateUrl: './room-dialog.component.html',
  styleUrls: ['./room-dialog.component.scss']
})
export class RoomDialogComponent {
  faTimes = faTimes;
  keys;
  slevelKeys;
  slevels = SchoolLevel;
  states = ClassState;
  constructor(
    public dialogRef: MatDialogRef<RoomDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.slevelKeys = Object.keys(this.slevels).filter(x => x.length > 5);
    this.keys = Object.keys(this.states).filter(Number);
    this.data.status = this.states.BORRADOR
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  close() {
    this.dialogRef.close();
  }
}
