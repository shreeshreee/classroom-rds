import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { StudentEntityService } from '../../../store/student/student-entity.service';

@Component({
  selector: 'app-course-students',
  templateUrl: './course-students.component.html',
  styleUrls: ['./course-students.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseStudentsComponent implements OnInit {
  isStudentsLoading$: Observable<boolean>;
  students$: Observable<gapi.client.classroom.Student[]>;
  students: gapi.client.classroom.Student[];
  courseId: string;

  constructor(
    private studentEntityService: StudentEntityService,
    private route: ActivatedRoute,

  ) { }

  ngOnInit(): void {
    this.courseId = this.route.snapshot.paramMap.get('courseId');
    this.isStudentsLoading$ = this.studentEntityService.loading$;
    this.students$ = this.studentEntityService.entities$
      .pipe(
        map(students => {
          if (!students) {
            this.studentEntityService.getWithQuery(this.courseId);
          };
          return students.filter(x => x.courseId === this.courseId);
        })
      );
  }
}


