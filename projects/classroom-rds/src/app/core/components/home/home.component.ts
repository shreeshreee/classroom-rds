import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../../../auth/models/user.model';
import { AppState } from '../../../store/app.state';
import * as fromAuthSelectors from './../../../auth/state/auth.selectors';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user$: Observable<User>;
  isOnline$: Observable<boolean>;
  isAdmin: Observable<boolean>;
  constructor(
    private store: Store<AppState>,
  ) { }
  ngOnInit(): void {
    this.isOnline$ = this.store.select(fromAuthSelectors.selectIsLoggedIn);
    this.isAdmin = this.store.select(fromAuthSelectors.selectIsAdmin);
    this.user$ = this.store.select(fromAuthSelectors.selectUser);
  }
}
