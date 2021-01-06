import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-course-students',
  templateUrl: './course-students.component.html',
  styleUrls: ['./course-students.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseStudentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
