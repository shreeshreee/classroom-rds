import { Component, Input, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';

import { AppState } from '@rds-store/app.state';

import { User } from '@rds-auth/models/user.model';
import { selectUser } from '@rds-auth/state/auth.selectors';

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
      title: 'Sistema de administración',
      description: 'Panel personalizado para la administración de Google Admin.',
      route: 'under-construction',
      imgUrl: 'assets/images/system-administrator.png'
    },
    {
      title: 'Classroom',
      description: 'Realiza funciones globales y particulares en Google Classroom',
      route: 'c',
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

}
