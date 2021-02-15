import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { GoogleSheetsDbService } from 'ng-google-sheets-db';

import { Observable } from 'rxjs';
import { environment } from '@rds-env/environment';
import { StudentGrade, studentGradeAttributesMapping } from '../../models/student-grade.model';

@Component({
  selector: 'app-select-course',
  templateUrl: './select-course.component.html',
  styleUrls: ['./select-course.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectCourseComponent implements OnInit {
  @Input() courses: gapi.client.classroom.Course[];
  @Input() loading: boolean;
  characters$: Observable<StudentGrade[]>
  constructor(private googleSheetsDbService: GoogleSheetsDbService) { }

  ngOnInit(): void {
    this.characters$ = this.googleSheetsDbService.getActive<StudentGrade>(
      environment.characters.spreadsheetId, environment.characters.worksheetId, studentGradeAttributesMapping, 'Active');
  }

}
