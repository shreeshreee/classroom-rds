import { Component, Input, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';

import { AppState } from '@rds-store/app.state';

import { User } from '@rds-auth/models/user.model';
import { selectUser } from '@rds-auth/state/auth.selectors';
import * as fromAuthActions from '@rds-auth/state/auth.actions';

import { Observable } from 'rxjs';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  user$: Observable<User>;
  /** Based on the screen size, switch from standard to one column per row */
  cards = [
    {
      title: 'Información Académica',
      description: 'Accede a toda tu información como alumno.',
      route: 'user',
      imgUrl: 'assets/images/assignment-grades2.png'
    },
    {
      title: 'Sistema de calificaciones',
      description: 'Accede a la información de tus calificaciones si eres alumno, o califica a tus alumnos en todas las materias que impartes si eres profesor.',
      route: 'calificaciones',
      imgUrl: 'assets/images/assignment-grades2.png'
    },
    {
      title: 'Classroom',
      description: 'Consulta la información de tus clases si eres alumno, o modifica y actualiza la información si eres profesor o administrador.',
      route: 'clases',
      imgUrl: 'assets/images/classroom-administrator.png',
    },
    {
      title: 'Salones y grupos',
      description: 'Administra grados, grupos y horarios en la institución',
      route: 'under-construction',
      imgUrl: 'assets/images/schedule-administrator.png',
    },
  ];
  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.user$ = this.store.pipe(select(selectUser));
  }
  optionsByRole(userId: string) {
    this.store.dispatch(fromAuthActions.checkTeacherRole({ id: userId }));
  }
}
