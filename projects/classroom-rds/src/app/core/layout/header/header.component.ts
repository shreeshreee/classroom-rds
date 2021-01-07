import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, Input } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faBars, faSignInAlt, faShieldAlt, faSignOutAlt, faEllipsisV, faGlobe, faInfo } from '@fortawesome/free-solid-svg-icons';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { LayoutService } from '../layout.service';
import { animateText } from '../../animations/animations';
import { AppState } from '../../../store/app.state';
import { User } from '../../../auth/models/user.model';
import * as fromAuthActions from "../../../auth/state/auth.actions";

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
  @Input() isHandset$: Observable<boolean>;
  @Input() user: User;
  @Input() isOnline: boolean;
  @Input() isAdmin: boolean;
  basicProfile: gapi.auth2.BasicProfile;
  faBars = faBars;
  faSignIn = faSignInAlt;
  faEllipsisV = faEllipsisV;
  faGlobe = faGlobe;
  faGoogle = faGoogle;
  faInfo = faInfo;
  linkText: boolean = false;
  constructor(
    private layoutService: LayoutService,
    private store: Store<AppState>,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer
  ) {
    iconRegistry.addSvgIcon(
      'en',
      sanitizer.bypassSecurityTrustResourceUrl('assets/flags/en.svg')
    );
    iconRegistry.addSvgIcon(
      'es',
      sanitizer.bypassSecurityTrustResourceUrl('assets/flags/es.svg')
    );
  }

  ngOnInit() { }
  toggleSidenavLeft($event: any) {
    this.layoutService.toggleSidenavLeft.emit($event);
  }
  onSignIn() {
    this.store.dispatch(
      fromAuthActions.signIn()
    );
  }

}
