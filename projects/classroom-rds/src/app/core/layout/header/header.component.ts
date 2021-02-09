import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import {
  faBars,
  faSignInAlt,
  faShieldAlt,
  faSignOutAlt,
  faEllipsisV,
  faGlobe,
  faInfo,
  faUserTie
} from '@fortawesome/free-solid-svg-icons';

import { Store } from '@ngrx/store';

import { AppState } from '@rds-store/app.state';

import { User } from '@rds-auth/models/user.model';
import { signOut } from '@rds-auth/state/auth.actions';
import { LoginDialogComponent } from '@rds-auth/components/login-dialog/login-dialog.component';

import { LayoutService } from '../layout.service';

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
  @Input() isHandset: boolean;
  @Input() user: User;
  @Input() isOnline: boolean;
  @Input() isAdmin: boolean;
  @Input() isTeacher: boolean;
  faBars = faBars;
  faSignIn = faSignInAlt;
  faEllipsisV = faEllipsisV;
  faShieldAlt = faShieldAlt;
  faSignOut = faSignOutAlt;
  faUserTie = faUserTie;
  faGlobe = faGlobe;
  faGoogle = faGoogle;
  faInfo = faInfo;
  linkText: boolean = false;
  constructor(
    private layoutService: LayoutService,
    private dialog: MatDialog,
    private store: Store<AppState>
  ) { }

  ngOnInit() { }
  toggleSidenavLeft($event: any) {
    this.layoutService.toggleSidenavLeft.emit($event);
  }
  onSignIn() {
    this.dialog.open(LoginDialogComponent, { height: '250px', width: '350px' });
  }
  onSignOut() {
    this.store.dispatch(signOut({ user: this.user }));
  }
}
