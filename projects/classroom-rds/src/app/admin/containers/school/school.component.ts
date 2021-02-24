import { Component, OnInit } from '@angular/core';

import { QueryParams } from '@ngrx/data';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { SchoolLevel, UserDomain } from '../../models/users-domain.model';
import { UserDomainEntityService } from '../../state/user-domain/user-domain-entity.service';

import { CourseLevel } from '~/app/classroom/models/classroom.enum';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.scss']
})
export class SchoolComponent implements OnInit {
  users$: Observable<UserDomain[]>;
  loaded$: Observable<boolean>;
  level: string;
  grade: string;
  fullName: string;
  clevelKeys;
  clevels = CourseLevel;
  slevelKeys;
  slevels = SchoolLevel;
  queryParams: QueryParams;
  raisedElev = 8;
  searching: boolean = false;

  constructor(
    private userDomainEntityService: UserDomainEntityService,
  ) {
    this.loaded$ = this.userDomainEntityService.loaded$;
    this.clevelKeys = Object.keys(this.clevels).filter(Number);
    this.slevelKeys = Object.keys(this.slevels).filter(Number);
    this.level = "Primaria";
    this.grade = "1° de Primaria";
    this.queryParams = { level: this.level, grade: this.grade };
  }



  ngOnInit(): void {
    this.queryParams = { level: this.level, grade: this.grade }
    this.users$ = this.userDomainEntityService.entities$
      .pipe(map(users => {
        if (!users) {
          this.userDomainEntityService.getWithQuery(this.queryParams);
        }
        return users.filter(x => x.orgUnitPath.endsWith(this.grade))
      }));
  }
  onLevelelection(event) {
    this.level = event.key;
    this.queryParams = { level: this.level, grade: this.grade }

  }
  onGradeSelection(event) {
    this.grade = event.key;
    this.queryParams = { level: this.level, grade: this.grade };

  }
  onSearch() {
    this.queryParams = { level: this.level, grade: this.grade };
    this.users$ = this.userDomainEntityService.entities$
      .pipe(map(users => {
        if (!users) {
          this.userDomainEntityService.getWithQuery(this.queryParams);
        }
        return users.filter(x => x.orgUnitPath.endsWith(this.grade))
      }));
  }
}
