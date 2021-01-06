import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-course-teachers',
  templateUrl: './course-teachers.component.html',
  styleUrls: ['./course-teachers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseTeachersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
