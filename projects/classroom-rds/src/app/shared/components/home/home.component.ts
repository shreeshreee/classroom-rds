import { Component, OnInit } from '@angular/core';

import { select, Store } from '@ngrx/store';

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
  constructor(
    private store: Store<AppState>,
  ) {
    this.isOnline$ = this.store.pipe(select(fromAuthSelectors.isLoggedIn));
  }
  ngOnInit(): void {

  }
}
