import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MatDialog } from '@angular/material/dialog';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';

import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faUser, faHome, faSchool, faChalkboardTeacher, faUserTie, faUserGraduate, faUserCog, IconDefinition, faCompressAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

import { Observable } from 'rxjs';

import { LayoutService } from './../layout.service';
import { animateText, onMainContentChange, onSideNavChange } from '../../animations/animations';
import { User } from '../../../auth/models/user.model';
interface Page {
  route: string[];
  name: string;
  icon: IconDefinition;
}
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [onMainContentChange, onSideNavChange, animateText]
})
export class SidenavComponent implements OnInit {
  @ViewChild('leftSidenav') sidenavLeft: MatSidenav;
  @Input() isHandset$: Observable<boolean>;
  @Input() isOnline: boolean;
  @Input() isAdmin: boolean;
  @Input() user: User;
  @Output() routeUser: EventEmitter<User>;
  loading = true;
  sideNavState: boolean = false;
  onSideNavChange: boolean;
  linkText: boolean = false;
  classroomPages: Page[] = [
    { name: 'Inicio', route: ['/'], icon: faHome },
    { name: 'Coursos', route: ['courses'], icon: faChalkboardTeacher },
    { name: 'Profesores', route: ['teachers'], icon: faUserTie },
    { name: 'Alumnos', route: ['stundets'], icon: faUserGraduate },
  ]
  faCompressAlt = faCompressAlt;
  faUser = faUser;

  faSchool = faSchool;

  faUserCog = faUserCog;
  faGoogle = faGoogle;

  constructor(
    private layoutService: LayoutService,
    private router: Router
  ) {
    this.layoutService.toggleSidenavLeft.subscribe(() => {
      this.sidenavLeft.toggle();
    });
    this.router.events.subscribe(event => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.loading = true;
          break;
        }
        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this.loading = false;
          break;
        }
        default: {
          break;
        }
      }
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