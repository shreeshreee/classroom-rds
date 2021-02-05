import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { QueryParams } from '@ngrx/data';

import { CourseEntityService } from '@rds-store/course/course-entity.service';

import { map, filter } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-grades',
  templateUrl: './user-grades.component.html',
  styleUrls: ['./user-grades.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserGradesComponent implements OnInit {
  courses$: Observable<gapi.client.classroom.Course[]>;
  queryParams: QueryParams;
  constructor(
    private route: ActivatedRoute,
    private courseES: CourseEntityService
  ) {
    this.queryParams = {
      studentId: this.route.snapshot.paramMap.get('studentId')
    }
    this.courses$ = this.courseES.getWithQuery(this.queryParams);
  }
  ngOnInit(): void {
  }

}
