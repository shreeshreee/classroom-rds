import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { AppState } from '@rds-store/app.state';

import { User } from '@rds-auth/models/user.model';
import { selectUser } from '@rds-auth/state/auth.selectors';

import { map } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';

import { Score } from '../../models/score.model';
import { UserScoresService } from './../../services/user-scores.service';

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
  constructor(
    private store: Store<AppState>,
    private scoreServices: UserScoresService
  ) {
    this.user$ = this.store.select(selectUser);
  }

  ngOnInit(): void {
    this.user$.subscribe(user => {
      console.log(this.user)

      this.scores = this.scoreServices.getScores(user.id);
    });
  }

}
