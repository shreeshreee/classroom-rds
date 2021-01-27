import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';


@Component({
  selector: 'app-course-work',
  templateUrl: './course-work.component.html',
  styleUrls: ['./course-work.component.scss']
})
export class CourseWorkComponent implements OnInit {
  @Input() courseWorks: gapi.client.classroom.CourseWork[];
  creator: gapi.client.classroom.UserProfile;

  loading$: Observable<boolean>;
  courseWorks$: Observable<gapi.client.classroom.CourseWork[]>;
  courseId: string;
  constructor(
  ) { }

  ngOnInit(): void { }

}

