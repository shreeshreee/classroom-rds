import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, Input } from '@angular/core';

import { faBars, faSignInAlt, faSignOutAlt, faShieldAlt } from '@fortawesome/free-solid-svg-icons';

import { Observable } from 'rxjs';

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
  @Input() isHandset$: Observable<boolean>;
  faBars = faBars;
  faSignIn = faSignInAlt;
  faSignOut = faSignOutAlt;
  faShieldAlt = faShieldAlt;
  constructor(
    public layoutService: LayoutService,
  ) { }

  ngOnInit(): void {
  }
  toggleSidenavLeft($event: any) {
    this.layoutService.toggleSidenavLeft.emit($event);
  }
  onLogin() { }
  onLogout() { }
}
