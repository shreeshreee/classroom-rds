import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, ViewChild } from '@angular/core';

import { faPrint } from '@fortawesome/free-solid-svg-icons';
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';

import { select, Store } from '@ngrx/store';

import { AppState } from '@rds-store/app.state';

import { User } from '@rds-auth/models/user.model';
import { selectUser } from '@rds-auth/state/auth.selectors';

import { map } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';

import { Score } from '../../models/score.model';

import { SchoolService } from '~/app/school/services/school.service';


@Component({
  selector: 'app-user-grades',
  templateUrl: './user-grades.component.html',
  styleUrls: ['./user-grades.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserGradesComponent implements OnInit {
  user$: Observable<User>;
  user: User;
  userName: string;
  userSub: Subscription;
  scores: Observable<Score[]>;
  today: Date = new Date();
  faPrint = faPrint;
  faFilePdf = faFilePdf;
  constructor(
    private store: Store<AppState>,
    private schoolService: SchoolService
  ) {
    this.user$ = this.store.select(selectUser);
  }

  ngOnInit(): void {
    this.user$.subscribe(user => {
      this.scores = this.schoolService.getScores(user.id);
    });
  }
  printPage() {
    window.print();
  }
}
