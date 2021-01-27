import {
  ActivatedRoute,
  Router,
  ActivatedRouteSnapshot,
} from '@angular/router';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

import {
  faBell,
  faBellSlash,
  faBriefcase,
  faBullhorn,
  faFileSignature,
  faUserGraduate,
  faUserTie,
} from '@fortawesome/free-solid-svg-icons';

import { from, Observable, of } from 'rxjs';
import { filter, first, map, shareReplay, take, tap } from 'rxjs/operators';

import { AnnouncementEntityService } from './../../../store/announcement/announcement-entity.service';
import { CourseWorkEntityService } from '../../../store/course-work/course-work-entity-service.service';
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

  isOwenerLoaded$: Observable<boolean>;
  isTeacherLoaded$: Observable<boolean>;
  isStudentLoaded$: Observable<boolean>;
  isTeachersLoading$: Observable<boolean>;
  isStudentsLoading$: Observable<boolean>;
  isAnnouncementLoading$: Observable<boolean>
  students$: Observable<gapi.client.classroom.Student[]>;
  courses$: Observable<gapi.client.classroom.Course[]>;
  teachers$: Observable<gapi.client.classroom.Teacher[]>;
  owner$: Observable<gapi.client.classroom.Teacher>;
  courseWorks$: Observable<gapi.client.classroom.CourseWork[]>;
  announcements$: Observable<gapi.client.classroom.Announcement[]>;
  topics$: Observable<gapi.client.classroom.Topic[]>;
  courseWorkMaterials: Observable<gapi.client.classroom.CourseWorkMaterial[]>;
  courseId: string;
  ownerId: string;
  faBell = faBell;
  faBellSlash = faBellSlash;
  faFileSignature = faFileSignature;
  faUserGraduate = faUserGraduate;
  faUserTie = faUserTie;
  faBriefcase = faBriefcase;
  faBullhorn = faBullhorn;
  course: gapi.client.classroom.Course;
  teachers: gapi.client.classroom.Teacher[];
  students: gapi.client.classroom.Student[];
  owner: gapi.client.classroom.Teacher;
  isLoading$: Observable<boolean>;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  constructor(
    private route: ActivatedRoute,
    private breakpointObserver: BreakpointObserver,
    private courseEntityService: CourseEntityService,
    private courseWorkEntityService: CourseWorkEntityService,
    private teacherEntityService: TeacherEntityService,
    private studentEntityService: StudentEntityService,
    private announcementEntityService: AnnouncementEntityService
  ) {

    //this.teacherEntityService.setLoaded(false);
    //this.studentEntityService.setLoaded(false);
    this.courseId = this.route.snapshot.paramMap.get('courseId');
    this.course$ = this.courseEntityService.entities$.pipe(
      map(courses => courses.find(course => course.id == this.courseId))
    );

  }
  ngOnInit() {
    this.teachers$ = this.teacherEntityService.entities$.pipe(
      map(teachers => {
        if (!teachers) {
          this.teacherEntityService.getWithQuery(this.courseId);
        }
        return teachers.filter(x => x.courseId == this.courseId);
      }),
    );
    this.announcements$ = this.announcementEntityService.entities$.pipe(
      map(announcements => {
        if (!announcements) {
          this.announcementEntityService.getWithQuery(this.courseId);
        }
        return announcements.filter(x => x.courseId == this.courseId);
      }),
    );

    this.students$ = this.studentEntityService.entities$.pipe(
      map(students => {
        if (!students) {
          this.studentEntityService.getWithQuery(this.courseId);
        }
        return students.filter(x => x.courseId == this.courseId);
      }),
    );

    this.courseWorks$ = this.courseWorkEntityService.entities$.pipe(
      map(courseWorks => {
        if (!courseWorks) {
          this.courseWorkEntityService.getWithQuery(this.courseId);
        }
        return courseWorks.filter(x => x.courseId == this.courseId);
      }),
    );

    /*   this.courseEntityService.collection$.subscribe(
        (course) => { this.course = course.entities[this.courseId]; }
      ); */

    /* this.isCourseLoading$ = this.courseEntityService.loaded$;

    this.isTeachersLoading$ = this.teacherEntityService.loaded$;
    this.isStudentsLoading$ = this.studentEntityService.loaded$;
    this.isAnnouncementLoading$ = this.announcementEntityService.loaded$; */

    /* this.courseEntityService.entities$
      .pipe(
        map(courses => {
          return courses.filter(x => x.id == this.courseId);
        })
      ).subscribe(courses => {
        this.course = courses.find(x => x.id == this.courseId);
      }); */

    // Get Students
    /*   this.studentEntityService.entities$.pipe(
        tap((stdts) => {
          if (!stdts) {
            this.students$ = this.studentEntityService.getWithQuery(this.courseId);
          }
        }),
        filter(loaded => !!loaded),
        first()
      );
   */
    //get Teachers and select course's owner
    /*  this.teachers$ = this.teacherEntityService.entities$.pipe(
       map((teachers) => {
         if (!teachers) {
           this.teacherEntityService.getWithQuery(this.courseId);
         }
         return teachers.filter((x) => (x.courseId === this.courseId));
       })
     )
     this.teachers$.subscribe((teachers) => {
       this.owner = teachers.find((y) => y.userId == this.course.ownerId);
     }); */
  }
  reload() {

  }
}
