import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { faBars, faSignInAlt, faSignOutAlt, faShieldAlt } from '@fortawesome/free-solid-svg-icons';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { LayoutService } from '../layout.service';
import { AppState } from './../../../store/app.state';
import { User } from '../../../auth/models/user.model';
import { AuthService } from './../../../auth/services/auth.service';
import * as fromAuthActions from "../../../auth/state/auth.actions";
import { SignInComponent } from './../../../auth/components/sign-in/sign-in.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('fade',
      [
        state('void', style({ opacity: 0 })),
        transition(':enter', [animate(0)]),
        transition(':leave', [animate(200)]),
      ]
    )]
})
export class HeaderComponent implements OnInit {
  @Input() isHandset$: Observable<boolean>;
  @Input() user: User;
  @Input() isOnline: boolean
  basicProfile: gapi.auth2.BasicProfile;
  faBars = faBars;
  faSignIn = faSignInAlt;
  faSignOut = faSignOutAlt;
  faShieldAlt = faShieldAlt;
  constructor(
    private layoutService: LayoutService,
    private dialog: MatDialog,
    private store: Store<AppState>
  ) { }

  ngOnInit() { }
  toggleSidenavLeft($event: any) {
    this.layoutService.toggleSidenavLeft.emit($event);
  }
  onLogin() {
    this.dialog.open(SignInComponent, { height: '250px', width: '380px' });
  }
  onSignOut() {
    this.store.dispatch(fromAuthActions.signOut({ user: this.user }));
  }
}
