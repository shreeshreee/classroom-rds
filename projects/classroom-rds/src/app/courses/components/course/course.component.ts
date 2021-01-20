import { ActivatedRoute, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { ThisReceiver } from '@angular/compiler';

import { faBell, faBellSlash, faFileSignature, faUserGraduate, faUserTie } from '@fortawesome/free-solid-svg-icons';

import { Store, select } from '@ngrx/store';

import { from, Observable } from 'rxjs';
import { delay, map, tap, withLatestFrom } from 'rxjs/operators';

import { Course } from '../../models/course.model';
import { AppState } from '../../../store/app.state';
import { CourseDataService } from '../../../store/course/course-data.service';
import { CourseEntityService } from '../../../store/course/course-entity.service';
import { StudentEntityService } from './../../../store/student/student-entity.service';
import { TeacherEntityService } from './../../../store/teacher/teacher-entity.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseComponent implements OnInit {
  course$: Observable<gapi.client.classroom.Course>;
  isLoading$: Observable<boolean>;
  students$: Observable<gapi.client.classroom.Student[]>;
  teachers$: Observable<gapi.client.classroom.Teacher[]>;
  owner$: Observable<gapi.client.classroom.Teacher>;
  courseWorks$: Observable<gapi.client.classroom.CourseWork[]>;
  announcements$: Observable<gapi.client.classroom.Announcement[]>;
  topics$: Observable<gapi.client.classroom.Topic[]>;
  courseWorkMaterials: Observable<gapi.client.classroom.CourseWorkMaterial[]>;
  courseId: string;
  ownerId: string;
  faStudents = faUserGraduate;
  faTeachers = faUserTie;
  faBell = faBell;
  faBellSlash = faBellSlash;
  faFileSignature = faFileSignature;
  faUserGraduate = faUserGraduate;
  faUserTie = faUserTie;
  constructor(
    private route: ActivatedRoute,
    private courseEntityService: CourseEntityService,
    private studentEntityService: StudentEntityService,
    private teacherEntityService: TeacherEntityService
  ) {

  }
  ngOnInit() {
    this.courseId = this.route.snapshot.paramMap.get('courseId');
    this.isLoading$ = this.courseEntityService.loading$;
    this.course$ = this.courseEntityService.entities$
      .pipe(
        map(courses => {
          return courses.find(course => {
            course.id === this.courseId
            return course;
          })
        })
      );
    this.students$ = this.studentEntityService.getWithQuery(this.courseId);
    this.teachers$ = this.teacherEntityService.getWithQuery(this.courseId);
    this.course$.subscribe(course => this.ownerId = course.ownerId);
    this.owner$ = this.teachers$
      .pipe(
        map(teachers => {
          return teachers.find(teacher => {
            teacher.userId === this.ownerId
            return teacher;
          })
        }));
    //this.course$ = this.courseEntityService.getByKey(this.route.snapshot.paramMap.get('courseId'));
    /*     this.courses$ = this.courseEntityService.filteredEntities$
     */      /* .pipe(
map(course => course.find(course => course.id == courseId))
); */
    /*
    this.teachers$ = this.teacherEntityService.entities$
      .pipe(
        withLatestFrom(this.fullcourse$),
        tap(([teachers, fullcourse]) => {
          //this.loadTeacher(fullcourse);

        }),
        map(([teachers, fullcourse]) =>
          teachers.filter(teacher => teacher.courseId == fullcourse.course.id))
      );

    this.loading$ = this.teacherEntityService.loading$.pipe(delay(0)); */
  }


}
