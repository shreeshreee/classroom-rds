import { ActivatedRoute, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { ThisReceiver } from '@angular/compiler';

import { faBell, faBellSlash, faFileSignature, faUserGraduate, faUserTie } from '@fortawesome/free-solid-svg-icons';

import { Store, select } from '@ngrx/store';

import { Observable } from 'rxjs';
import { delay, map, tap, withLatestFrom } from 'rxjs/operators';

import { Course } from '../../models/course.model';
import { AppState } from '../../../store/app.state';
import { CourseDataService } from '../../../store/course/course-data.service';
import { CourseEntityService } from '../../../store/course/course-entity.service';
import { StudentEntityService } from '../../../store/student/student-entity.service';

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
  students: gapi.client.classroom.Student[];
  courseId: string;
  faUserGraduate = faUserGraduate;
  faFileSignature = faFileSignature;
  faBellSlash = faBellSlash;
  faBell = faBell;
  faUserTie = faUserTie;
  constructor(
    private route: ActivatedRoute,
    private studentEntityService: StudentEntityService,
    private courseEntityService: CourseEntityService,

  ) {

    //studentEntityService.getWithQuery(this.courseId).subscribe(students => this.students = students);
    /*  this.courseId = route.snapshot.params['id'];
     this.studentEntityService.entities$.pipe(map(response => {
       this.students = response
     })); */
    //this.store.select(fromCoursesSelector.selectAllCourses).subscribe(courses => this.courses = courses);
  }
  ngOnInit() {
    this.isLoading$ = this.studentEntityService.loading$;
    this.students$ = this.studentEntityService.entities$;
    this.course$ = this.courseEntityService.getByKey(this.route.snapshot.paramMap.get('courseId'));
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
