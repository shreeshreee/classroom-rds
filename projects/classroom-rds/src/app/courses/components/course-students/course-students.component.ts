import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { StudentEntityService } from '../../../store/student/student-entity.service';
@Component({
  selector: 'app-course-students',
  templateUrl: './course-students.component.html',
  styleUrls: ['./course-students.component.scss'],
})
export class CourseStudentsComponent implements OnInit {
  //@Input() students: gapi.client.classroom.Student[];
  students$: Observable<gapi.client.classroom.Student[]>;
  courseId: string;

  constructor(
    private route: ActivatedRoute,
    private studentEntityService: StudentEntityService,
  ) {
    this.courseId = this.route.snapshot.paramMap.get('courseId');
  }

  ngOnInit(): void {
    this.students$ = this.studentEntityService.entities$.pipe(
      map(students => {
        if (!students) {
          this.studentEntityService.getWithQuery(this.courseId);
        }
        return students.filter(x => x.courseId == this.courseId);
      }),
    );
  }
}


