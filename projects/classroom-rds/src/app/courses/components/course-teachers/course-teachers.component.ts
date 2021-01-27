import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { StudentEntityService } from '../../../store/student/student-entity.service';
import { TeacherEntityService } from '../../../store/teacher/teacher-entity.service';

@Component({
  selector: 'app-course-teachers',
  templateUrl: './course-teachers.component.html',
  styleUrls: ['./course-teachers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseTeachersComponent implements OnInit {
  isTeachersLoading$: Observable<boolean>;
  teachers$: Observable<gapi.client.classroom.Teacher[]>;
  teachers: gapi.client.classroom.Teacher[];
  courseId: string;
  constructor(
    private teacherEntityService: TeacherEntityService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.reload();
  }
  reload() {
    this.courseId = this.route.snapshot.paramMap.get('courseId');
    this.isTeachersLoading$ = this.teacherEntityService.loading$;
    this.teachers$ = this.teacherEntityService.entities$
      .pipe(
        map(teachers => {
          if (!teachers) {
            this.teacherEntityService.getWithQuery(this.courseId);
          };
          return teachers.filter(x => x.courseId === this.courseId);
        })
      );
  }

}
