import { Component } from '@angular/core';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { AppState } from './../../store/app.state';
import { User } from '../../auth/models/user.model';
import * as fromAuthSelectors from './../../auth/state/auth.selectors';

import { LayoutService } from './layout.service';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  isHandset$: Observable<boolean>;
  user$: Observable<User>;
  isOnline$: Observable<boolean>;
  isAdmin$: Observable<boolean>;

  constructor(
    private layoutService: LayoutService,
    private store: Store<AppState>
  ) {
    this.isHandset$ = this.layoutService.isHandset$
    this.isOnline$ = this.store.select(fromAuthSelectors.selectIsLoggedIn);
    this.user$ = this.store.select(fromAuthSelectors.selectUser);
    this.isAdmin$ = this.store.select(fromAuthSelectors.selectIsAdmin);
  }

}
