import { Grades, gradesAttributesMapping } from './../../models/grades.model';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { QueryParams } from '@ngrx/data';
import { select, Store } from '@ngrx/store';

import { AppState } from '@rds-store/app.state';

import { User } from '@rds-auth/models/user.model';
import { selectUser } from '@rds-auth/state/auth.selectors';

import { environment } from '@rds-env/environment';

import { map, filter } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { GoogleSheetsDbService } from 'ng-google-sheets-db';

@Component({
  selector: 'app-user-grades',
  templateUrl: './user-grades.component.html',
  styleUrls: ['./user-grades.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserGradesComponent implements OnInit {
  user$: Observable<User>;
  characters$: Observable<Grades[]>;
  userGrade$: Observable<Grades>;
  userName: string;
  constructor(
    private store: Store<AppState>,
    private googleSheetsDbService: GoogleSheetsDbService

  ) {
    this.store.select(selectUser).subscribe(user => this.userName = user.name);
  }
  ngOnInit(): void {
    this.userGrade$ = this.googleSheetsDbService.getActive<Grades>(
      environment.characters.spreadsheetId, environment.characters.worksheetId, gradesAttributesMapping, 'Active').pipe(map(grade => grade.find(x => x.name == this.userName)));
  }

}
