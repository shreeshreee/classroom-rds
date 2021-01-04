import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, Input } from '@angular/core';

import { faBars, faSignInAlt, faShieldAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { LayoutService } from '../layout.service';
import { AppState } from '../../../store/app.state';
import { User } from '../../../auth/models/user.model';
import * as fromAuthActions from "../../../auth/state/auth.actions";

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
  @Input() isOnline: boolean;
  @Input() isAdmin: boolean;
  basicProfile: gapi.auth2.BasicProfile;
  faBars = faBars;
  faSignIn = faSignInAlt;
  faShieldAlt = faShieldAlt;
  faSignOut = faSignOutAlt;

  constructor(
    private layoutService: LayoutService,
    private store: Store<AppState>

  ) { }

  ngOnInit() { }
  toggleSidenavLeft($event: any) {
    this.layoutService.toggleSidenavLeft.emit($event);
  }
  onSignIn() {
    this.store.dispatch(
      fromAuthActions.signIn()
    );
  }
  onSignOut() {
    this.store.dispatch(
      fromAuthActions.signOut({ user: this.user })
    );
  }
}
