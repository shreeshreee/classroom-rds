import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent } from '@angular/router';

import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faUser, faHome, faSchool, faChalkboardTeacher, faUserTie, faUserGraduate, faUserCog, IconDefinition, faCompressAlt, faSignOutAlt, faShieldAlt, faUserPlus, faAward, faExpandAlt } from '@fortawesome/free-solid-svg-icons';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { LayoutService } from './../layout.service';
import { animateText, onMainContentChange, onSideNavChange } from '../../animations/animations';
import { AppState } from '../../../store/app.state';
import { User } from '../../../auth/models/user.model';
import { signOut } from '../../../auth/state/auth.actions';
import { NavLink } from '../../../shared/models/nav-link';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [onMainContentChange, onSideNavChange, animateText]
})
export class SidenavComponent implements OnInit {
  @ViewChild('leftSidenav') sidenavLeft: MatSidenav;
  @Input() isHandset: boolean;
  @Input() isOnline: boolean;
  @Input() isAdmin: boolean;
  @Input() isTeacher: boolean;
  @Input() user: User;
  @Output() routeUser: EventEmitter<User>;
  sideNavState: boolean = false;
  onSideNavChange: boolean;
  linkText: boolean = false;
  faChalkboardTeacher = faChalkboardTeacher;
  faUserPlus = faUserPlus;
  faAward = faAward;
  faCompressAlt = faCompressAlt;
  faExpandAlt = faExpandAlt;
  faUser = faUser;
  faSchool = faSchool;
  faUserCog = faUserCog;
  faGoogle = faGoogle;

  alert: any = {
    type: 'success',
    msg: `<div>
    <h2>
    Transmitiendo <strong>en vivo</strong>! Jueves 11 de Febrero, 9 am.
    </h2>
    Acompáñanos en la elaboración de <strong>galletas</strong> con motivo del día del amor y la amistad.
    <strong>Pulsa esta notificación</strong>
    </div>`
  };
  dismissible = true;

  constructor(
    private layoutService: LayoutService,
    private store: Store<AppState>,
  ) {
    this.layoutService.toggleSidenavLeft.subscribe(() => {
      this.sidenavLeft.toggle();
    });
  }

  ngOnInit(): void {
    this.layoutService.sideNavState$.subscribe(res => {
      this.onSideNavChange = res;
    })
  }

  onSidenavToggle() {
    this.sideNavState = !this.sideNavState

    setTimeout(() => {
      this.linkText = this.sideNavState;
    }, 100)
    this.layoutService.sideNavState$.next(this.sideNavState)
  }

}
