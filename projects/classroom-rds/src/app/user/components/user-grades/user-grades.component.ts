import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';

import { faPrint } from '@fortawesome/free-solid-svg-icons';
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';

import { select, Store } from '@ngrx/store';

import { AppState } from '@rds-store/app.state';

import { User } from '@rds-auth/models/user.model';

import { map } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';

import { isTeacher } from './../../../auth/state/auth.selectors';
import { SubscriptionService } from './../../../shared/services/subscription.service';

import { UserEntityService } from '~/app/store/user/user-entity.service';


@Component({
  selector: 'app-user-grades',
  templateUrl: './user-grades.component.html',
  styleUrls: ['./user-grades.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserGradesComponent implements OnInit, OnDestroy {
  user$: Observable<User>;
  isTeacher$: Observable<boolean>;
  loading$: Observable<boolean>;
  userId: string;
  userName: string;
  userSub: Subscription;
  today: Date = new Date();
  faPrint = faPrint;
  faFilePdf = faFilePdf;
  constructor(
    private userES: UserEntityService,
    private router: ActivatedRoute,
    private store: Store<AppState>,
    private subService: SubscriptionService
  ) {
    this.loading$ = this.userES.loading$;
    this.userId = this.router.parent.snapshot.paramMap.get('id');
    this.user$ = this.userES.entities$.pipe(map(users => users.find(u => u.id == this.userId)))
    this.isTeacher$ = this.store.pipe(select(isTeacher));
  }

  ngOnInit(): void {
  }
  printPage() {
    window.print();
  }
  ngOnDestroy() {
    this.subService.unsubscribeComponent$;
  }
}
