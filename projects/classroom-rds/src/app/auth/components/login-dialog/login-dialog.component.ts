import { Component, OnInit } from '@angular/core';

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

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
  }
  onLogin() {
    this.store.dispatch(
      fromAuthActions.signIn()
    );
  }
}
