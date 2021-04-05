import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AfterViewInit } from '@angular/core';

import { Store, select } from '@ngrx/store';

import { AppState } from '@rds-store/app.state';

import * as fromAuthActions from '@rds-auth/state/auth.actions';

import { User } from '~/app/auth/models/user.model';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements AfterViewInit, OnInit {
  //user$: Observable<User>;
  @Input() user: User;
  @Input() isTeacher: boolean;
  @Input() isAdmin: boolean;
  cards: any[];
  raisedElev: number = 12;
  constructor(
    private store: Store<AppState>,
  ) { }
  ngAfterViewInit(): void {

    this.cards = [
      {
        title: 'Información Académica',
        description: 'Accede a toda tu información como alumno.',
        route: 'user',
        imgUrl: 'assets/images/assignment-grades2.png',
        access: true
      },

      {
        title: 'Salones y grupos',
        description: 'Administra grados, grupos y horarios en la institución',
        route: 'under-construction',
        imgUrl: 'assets/images/schedule-administrator.png',
        access: true
      },
      {
        title: 'Google Classroom',
        description: 'Accede a funciones de Google Classroom.',
        route: 'clases',
        imgUrl: 'assets/images/classroom-administrator.png',
        access: true
      },
      {
        title: 'Google Admin',
        description: 'Accede a funciones como Administrador de G Suite.',
        route: 'admin',
        imgUrl: 'assets/images/system-administrator.png',
        access: true
      },
    ];
  }
  ngOnInit(): void {


  }
  optionsByRole(userId: string) {
    this.store.dispatch(fromAuthActions.checkTeacherRole({ id: userId }));
  }
}
