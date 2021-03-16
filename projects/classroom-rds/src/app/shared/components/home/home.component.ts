import { Component, OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { select, Store } from '@ngrx/store';

import * as fromAuthSelectors from '@rds-auth/state/auth.selectors';

import { AppState } from '@rds-store/app.state';

import { Observable } from 'rxjs';

import { User } from '~/app/auth/models/user.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isOnline$: Observable<boolean>;
  user$: Observable<User>;
  isTeacher$: Observable<boolean>;
  isAdmin$: Observable<boolean>;
  alerts: any[];
  constructor(
    private store: Store<AppState>,
    sanitizer: DomSanitizer
  ) {
    this.isOnline$ = this.store.pipe(select(fromAuthSelectors.isLoggedIn));
    this.isTeacher$ = this.store.select(fromAuthSelectors.isTeacher);
    this.isAdmin$ = this.store.select(fromAuthSelectors.isAdmin);
    this.user$ = this.store.pipe(select(fromAuthSelectors.selectUser));
    this.alerts = [{
      dismissible: true,
      type: 'success',
      visible: true,
      link: 'user/grades',
      msg: sanitizer.sanitize(SecurityContext.HTML, 'Conoce tus calificaciones de la Unidad 2 en la sección "Información Académica". <br>Disponibles a partir del <strong>24 de marzo de 2021</strong>. Puedes acceder aquí en este anuncio')
    },
    {
      dismissible: true,
      type: 'danger',
      visible: false,
      link: 'pan_de_sal',
      msg: sanitizer.sanitize(SecurityContext.HTML, 'Ingresa a la <strong>transmisión en vivo</strong> de la elaboración del Pan de Sal, de nuestro club de cocina. <br>Acompañanos el día <strong>11 de marzo de 2021 a las 12:00 del día.</strong>. Puedes acceder aquí en este anuncio')
    }]
  }
  ngOnInit(): void {

  }

}
