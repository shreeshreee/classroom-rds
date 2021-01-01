import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

import { faUser, faHome, faSchool, faChalkboardTeacher, faUserTie, faUserGraduate, faUserCog, IconDefinition, faCompressAlt } from '@fortawesome/free-solid-svg-icons';

import { Observable } from 'rxjs';

import { LayoutService } from './../layout.service';
import { animateText, onMainContentChange, onSideNavChange } from '../../animations/animations';
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
  sideNavState: boolean = false;
  onSideNavChange: boolean;
  linkText: boolean = false;
  classroomPages: Page[] = [
    { name: 'Inicio', route: ['/'], icon: faHome },
    { name: 'Coursos', route: ['classroom', 'courses'], icon: faChalkboardTeacher },
    { name: 'Profesores', route: ['classroom', 'teachers'], icon: faUserTie },
    { name: 'Alumnos', route: ['classroom', 'stundets'], icon: faUserGraduate },
  ]
  faCompressAlt = faCompressAlt;
  faUser = faUser;
  faHome = faHome;
  faSchool = faSchool;
  faChalkboardTeacher = faChalkboardTeacher;
  faUserTie = faUserTie;
  faUserGraduate = faUserGraduate;
  faUserCog = faUserCog;
  constructor(
    public layoutService: LayoutService,
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
