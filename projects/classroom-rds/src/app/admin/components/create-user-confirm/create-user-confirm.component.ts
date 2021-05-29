import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  templateUrl: './create-user-confirm.component.html',
  styleUrls: ['./create-user-confirm.component.scss']
})
export class CreateUserConfirmComponent implements OnInit {
  faTimes = faTimes;

  constructor(
    private dialogRef: MatDialogRef<CreateUserConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) { }

  ngOnInit(): void {
  }
  onClose() {
    this.dialogRef.close(this.data);
  }

}
