import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { environment } from '@rds-env/environment';

import { Observable } from 'rxjs';

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
  constructor() { }

  ngOnInit(): void {

  }
}
