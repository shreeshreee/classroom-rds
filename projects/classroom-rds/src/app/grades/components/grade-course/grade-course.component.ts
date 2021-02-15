import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

import { faBlind } from '@fortawesome/free-solid-svg-icons';

import { StudentEntityService } from '@rds-store/student/student-entity.service';

import { GoogleSheetsDbService } from 'ng-google-sheets-db';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '~/environments/environment';

import { StudentGrade, studentGradeAttributesMapping, } from '../../models/student-grade.model';

@Component({
  selector: 'app-grade-course',
  templateUrl: './grade-course.component.html',
  styleUrls: ['./grade-course.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GradeCourseComponent implements OnInit {
  students$: Observable<gapi.client.classroom.Student[]>;
  courseId: string;
  loading$: Observable<boolean>;
  faBlind = faBlind;
  eventGrade: StudentGrade;
  courseGrade: StudentGrade[];
  characters$: Observable<StudentGrade[]>

  constructor(
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private studentEntityService: StudentEntityService,
    private googleSheetsDbService: GoogleSheetsDbService
  ) {
    this.route.paramMap.subscribe(params => this.courseId = params.get('courseId'));
    this.loading$ = this.studentEntityService.loading$;
    this.students$ = this.studentEntityService.entities$.pipe(
      map(students => {
        if (!students) {
          this.studentEntityService.getWithQuery(this.courseId);
        }
        return students.filter(x => x.courseId == this.courseId);
      }),
    );

    this.students$.subscribe((students) => {
      this.courseGrade = [];
      students.map(student => {

      });
    });
  }
  ngOnInit(): void {
    this.characters$ = this.googleSheetsDbService.getActive<StudentGrade>(
      environment.characters.spreadsheetId, environment.characters.worksheetId, studentGradeAttributesMapping, 'Active');
  }
}
