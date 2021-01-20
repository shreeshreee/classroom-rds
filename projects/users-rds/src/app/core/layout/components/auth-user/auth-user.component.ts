import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { animateText } from './../../../../shared/animations/animations';

/* import * as fromAuthActions from "./../../auth/state/auth.actions";
 */
@Component({
  selector: 'app-auth-user',
  templateUrl: './auth-user.component.html',
  styleUrls: ['./auth-user.component.scss'],
  animations: [animateText]
})
export class AuthUserComponent implements OnInit {
  @Input() user: any;
  @Input() isOnline: boolean;
  @Input() isAdmin?: boolean;
  linkText: boolean = false;

  constructor(
    //private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
  }
  onSignIn() {
    //this.store.dispatch(signIn())}
  }
  onSignOut() {
    //this.store.dispatch(signIn())}
  }
}
