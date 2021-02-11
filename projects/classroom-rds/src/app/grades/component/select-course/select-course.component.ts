import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-select-course',
  templateUrl: './select-course.component.html',
  styleUrls: ['./select-course.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectCourseComponent implements OnInit {
  @Input() courses$: Observable<gapi.client.classroom.Course[]>;
  @Input() loading$: Observable<boolean>;
  constructor() { }

  ngOnInit(): void { }

}
