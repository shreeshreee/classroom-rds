import { Component, OnInit } from '@angular/core';

import { faFilePdf } from '@fortawesome/free-regular-svg-icons';
import { faPrint } from '@fortawesome/free-solid-svg-icons';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { AppState } from '~/app/store/app.state';
import { User } from '~/app/auth/models/user.model';
import { selectUser } from '~/app/auth/state/auth.selectors';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  user$: Observable<User>;
  faPrint = faPrint;
  faFilePdf = faFilePdf;
  constructor(
    private store: Store<AppState>,
  ) {
    this.user$ = this.store.select(selectUser);
  }
  ngOnInit(): void {
  }
  printPage() {
    window.print();
  }
}
