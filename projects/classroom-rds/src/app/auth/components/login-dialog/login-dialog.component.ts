import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

import { Store } from '@ngrx/store';

import * as fromAuthActions from './../../state/auth.actions';
import { AppState } from './../../../store/app.state';

@Component({
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit {
  faGoogle = faGoogle;
  faTimes = faTimes;
  constructor(
    private dialogRef: MatDialogRef<LoginDialogComponent>,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
  }
  onLogin() {
    this.store.dispatch(
      fromAuthActions.signIn()
    );
  }
  close() {
    this.dialogRef.close();
  }
}
