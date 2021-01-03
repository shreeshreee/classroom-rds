import { Component, OnInit } from '@angular/core';

import { faGoogle } from '@fortawesome/free-brands-svg-icons';

import { Store } from '@ngrx/store';

import * as fromAuthActions from './../../state/auth.actions';
import { AppState } from '../../../store/app.state';
@Component({
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  faGoogle = faGoogle;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
  }
  onSignIn() {
    this.store.dispatch(
      fromAuthActions.signIn()
    );
  }
}
