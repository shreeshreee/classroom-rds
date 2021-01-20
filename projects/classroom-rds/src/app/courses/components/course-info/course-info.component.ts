import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.scss']
})
export class CourseInfoComponent implements OnInit {
  @Input() course: gapi.client.classroom.Course;
  @Input() owner: gapi.client.classroom.Teacher;
  constructor() { }

  ngOnInit(): void {
  }

}
