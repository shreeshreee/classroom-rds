import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Grade, Score } from '../../models/grade.model';
import { User } from './../../../auth/models/user.model';

import { AppState } from '~/app/store/app.state';
import { UserAuth } from '~/app/auth/models/user-auth.model';
import { selectUser } from '~/app/auth/state/auth.selectors';
import { SchoolService } from '~/app/school/services/school.service';

@Component({
  selector: 'app-user-grades-printable',
  templateUrl: './user-grades-printable.component.html',
  styleUrls: ['./user-grades-printable.component.scss']
})
export class UserGradesPrintableComponent implements OnInit {
  user$: Observable<User>;
  today: Date = new Date();
  scores: Observable<Grade>;
  constructor(
    private store: Store<AppState>,
    private schoolService: SchoolService
  ) {
    this.user$ = this.store.select(selectUser);

  }

  ngOnInit(): void {
    this.user$.subscribe(user => {
      this.scores = this.schoolService.getCurrentScore(user.id);
    });
  }

}
