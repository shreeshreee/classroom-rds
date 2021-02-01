import { Component, OnInit } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { AppState } from './../../../store/app.state';
import * as fromAuthSelectors from './../../../auth/state/auth.selectors';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isOnline$: Observable<boolean>;
  constructor(
    private store: Store<AppState>,
  ) { }
  ngOnInit(): void {
    this.isOnline$ = this.store.pipe(select(fromAuthSelectors.isLoggedIn));
  }
}
