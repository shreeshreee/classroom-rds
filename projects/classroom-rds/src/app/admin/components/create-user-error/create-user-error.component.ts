import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  templateUrl: './create-user-error.component.html',
  styleUrls: ['./create-user-error.component.scss']
})
export class CreateUserErrorComponent implements OnInit {
  faTimes = faTimes;

  constructor(
    private dialogRef: MatDialogRef<CreateUserErrorComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) { }

  ngOnInit(): void {
  }
  onClose() {
    this.dialogRef.close(this.data);
  }
}
