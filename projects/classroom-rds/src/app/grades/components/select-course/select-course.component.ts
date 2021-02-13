import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-select-course',
  templateUrl: './select-course.component.html',
  styleUrls: ['./select-course.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectCourseComponent implements OnInit {
  @Input() courses: gapi.client.classroom.Course[];
  @Input() loading: boolean;
  constructor() { }

  ngOnInit(): void { }

}
