import { Component, OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { select, Store } from '@ngrx/store';

import { User } from '@rds-auth/models/user.model';
import * as fromAuthSelectors from '@rds-auth/state/auth.selectors';

import { AppState } from '@rds-store/app.state';

import { Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isOnline$: Observable<boolean>;
  user$: Observable<User>;
  alert: any;
  constructor(
    private store: Store<AppState>,
    sanitizer: DomSanitizer
  ) {
    this.isOnline$ = this.store.pipe(select(fromAuthSelectors.isLoggedIn));
    this.user$ = this.store.pipe(select(fromAuthSelectors.selectUser));
    this.alert = {
      dismissable: true,
      type: 'success',
      msg: sanitizer.sanitize(SecurityContext.HTML, 'Conoce tus calificaciones de la Unidad 2 en la sección "Información Académica".')
    }
  }
  ngOnInit(): void {

  }
  onClosed(dismissedAlert: any): void {
    this.alert = this.alert.filter(alert => alert !== dismissedAlert);
  }
}
