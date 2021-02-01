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
  faInfo
} from '@fortawesome/free-solid-svg-icons';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { LayoutService } from '../layout.service';
import { animateText } from '../../animations/animations';
import { AppState } from '../../../store/app.state';
import { User } from '../../../auth/models/user.model';
import { signOut } from '../../../auth/state/auth.actions';
import { LoginDialogComponent } from '../../../auth/components/login-dialog/login-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [animateText,
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
  faBars = faBars;
  faSignIn = faSignInAlt;
  faEllipsisV = faEllipsisV;
  faShieldAlt = faShieldAlt;
  faSignOut = faSignOutAlt;

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
    this.dialog.open(LoginDialogComponent, { height: '250px', width: '380px' });
  }
  onSignOut() {
    this.store.dispatch(signOut({ user: this.user }));
  }
}
