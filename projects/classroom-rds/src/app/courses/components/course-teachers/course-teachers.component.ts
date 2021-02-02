import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { TeacherEntityService } from './../../../store/teacher/teacher-entity.service';
@Component({
  selector: 'app-course-teachers',
  templateUrl: './course-teachers.component.html',
  styleUrls: ['./course-teachers.component.scss'],
})
export class CourseTeachersComponent implements OnInit {
  teachers$: Observable<gapi.client.classroom.Teacher[]>;
  courseId: string;

  constructor(
    private route: ActivatedRoute,
    private teacherEntityService: TeacherEntityService,
  ) {
    this.courseId = this.route.snapshot.paramMap.get('courseId');
  }

  ngOnInit(): void {
    this.teachers$ = this.teacherEntityService.entities$.pipe(
      map(teachers => {
        if (!teachers) {
          this.teacherEntityService.getWithQuery(this.courseId);
        }
        return teachers.filter(x => x.courseId == this.courseId);
      }),
    );
  }


}
