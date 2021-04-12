import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, ElementRef, ViewChild } from '@angular/core';

import { faPrint } from '@fortawesome/free-solid-svg-icons';
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';

import { select, Store } from '@ngrx/store';

import { AppState } from '@rds-store/app.state';

import { User } from '@rds-auth/models/user.model';

import { SubscriptionService } from '@rds-shared/services';

import { isTeacher } from '@rds-auth/state/auth.selectors';

import { UserEntityService } from '@rds-store/user/user-entity.service';

import { map } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';



@Component({
  selector: 'app-user-grades',
  templateUrl: './user-grades.component.html',
  styleUrls: ['./user-grades.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserGradesComponent implements OnInit, OnDestroy {
  @ViewChild('htmlData') htmlData: ElementRef;
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
    private subService: SubscriptionService,
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
