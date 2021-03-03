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
  faUserTie,
  faCog,
  faSlidersH
} from '@fortawesome/free-solid-svg-icons';

import { Store } from '@ngrx/store';

import { AppState } from '@rds-store/app.state';

import { signOut } from '@rds-auth/state/auth.actions';
import { LoginDialogComponent } from '@rds-auth/components/login-dialog/login-dialog.component';
import { User } from '@rds-auth/models/user.model';

import { LayoutService } from '../layout.service';
import { ConfigComponent } from '../config/config.component';

import { ThemeService } from '~/app/shared/services';

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

  faCog = faCog;
  faSlidersH = faSlidersH;
  linkText: boolean = false;
  themes: string[];

  constructor(
    private layoutService: LayoutService,
    private dialog: MatDialog,
    private store: Store<AppState>,
    private themeService: ThemeService
  ) { }

  ngOnInit() {
    this.themeService.isDarkTheme;
  }
  toggleSidenavLeft($event: any) {
    this.layoutService.toggleSidenavLeft.emit($event);
  }
  onSignIn() {
    this.dialog.open(LoginDialogComponent, { height: '250px', width: '350px' });
  }
  onSignOut() {
    this.store.dispatch(signOut({ user: this.user }));
  }
  openConfigDialog() {
    const dialogRef = this.dialog.open(ConfigComponent, { width: '300px', data: { checked: this.themeService.isDarkTheme } });
  }
}
