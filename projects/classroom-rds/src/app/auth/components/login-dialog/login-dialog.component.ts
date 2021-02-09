import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

import { faDoorClosed, faDoorOpen, faIcons, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FaIconComponent, FaLayersComponent } from '@fortawesome/angular-fontawesome';

import { Store } from '@ngrx/store';

import * as fromAuthActions from '@rds-auth/state/auth.actions';

import { AppState } from '@rds-store/app.state';

@Component({
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit {
  faGoogle = faGoogle;
  faTimes = faTimes;
  faDoor = faDoorOpen;
  constructor(
    private dialogRef: MatDialogRef<LoginDialogComponent>,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
  }
  onLogin() {
    this.faDoor = faDoorClosed;
    this.store.dispatch(
      fromAuthActions.signIn()
    );
  }
  close() {
    this.dialogRef.close();
  }
}
