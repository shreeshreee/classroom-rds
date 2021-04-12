import { ClassState } from './../../models/class.model';
import { CourseLevel, SchoolLevel } from '@rds-auth/models/user.enum';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CourseState } from '~/app/classroom/models/classroom.enum';

@Component({
  templateUrl: './subject-dialog.component.html',
  styleUrls: ['./subject-dialog.component.scss']
})
export class SubjectDialogComponent implements OnInit {
  faTimes = faTimes;
  keys;
  slevelKeys;
  slevels = SchoolLevel;
  states = ClassState;
  constructor(
    private dialogRef: MatDialogRef<SubjectDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    this.slevelKeys = Object.keys(this.slevels).filter(x => x.length > 5);
    this.keys = Object.keys(this.states).filter(Number);
    this.data.classState = this.states.BORRADOR
  }


  ngOnInit(): void {
  }
  onStateSelection(event) {
    this.data.courseState = event.key;
  }

  close() {
    this.dialogRef.close();
  }
}
