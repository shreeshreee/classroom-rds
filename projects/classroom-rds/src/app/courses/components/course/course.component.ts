import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { ThisReceiver } from '@angular/compiler';

import { faBell, faBellSlash, faFileSignature, faUserGraduate, faUserTie } from '@fortawesome/free-solid-svg-icons';

import { Store, select } from '@ngrx/store';

import { Observable } from 'rxjs';
import { delay, map, tap, withLatestFrom } from 'rxjs/operators';

import { Course } from '../../models/course.model';
import { CourseEntityService } from '../../services/course-entity.service';
import { CoursesService } from './../../services/courses.service';
import { TeacherEntityService } from '../../services/teacher-entity.service';
import { AppState } from '../../../store/app.state';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseComponent implements OnInit {
  course$: Observable<gapi.client.classroom.Course>;
  loading$: Observable<boolean>;
  teacher$: Observable<gapi.client.classroom.Teacher[]>;

  faUserGraduate = faUserGraduate;
  faFileSignature = faFileSignature;
  faBellSlash = faBellSlash;
  faBell = faBell;
  faUserTie = faUserTie;
  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private courseEntityService: CourseEntityService,
    private teacherEntityService: TeacherEntityService

  ) {
    //this.store.select(fromCoursesSelector.selectAllCourses).subscribe(courses => this.courses = courses);
  }
  ngOnInit() {
    const courseId = this.route.snapshot.paramMap.get('id');
    this.course$ = this.courseEntityService.entities$
      .pipe(
        map(courses => courses.find(course => course.id == courseId))
      );
    this.teacher$ = this.teacherEntityService.entities$
      .pipe(
        withLatestFrom(this.course$),
        tap(([teachers, course]) => {
          this.loadTeacher(course);

        }),
        map(([teachers, course]) =>
          teachers.filter(teacher => teacher.courseId == course.id))
      );

    this.loading$ = this.teacherEntityService.loading$.pipe(delay(0));
  }

  loadTeacher(course: gapi.client.classroom.Course) {
    this.teacherEntityService.getWithQuery({
      'courseId': course.id,
    });
  }
}
