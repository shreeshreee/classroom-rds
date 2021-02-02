import {
  ActivatedRoute,

} from '@angular/router';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import {
  faAt,
  faBellSlash,
  faBriefcase,
  faBullhorn,
  faEdit,
  faFileSignature,
  faHouseUser,
  faPaperPlane,
  faUserCheck,
  faUserGraduate,
  faUserPlus,
  faUserTie,
  faUserTimes,
} from '@fortawesome/free-solid-svg-icons';
import { faGoogleDrive } from '@fortawesome/free-brands-svg-icons';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CourseDialogComponent } from '../course-dialog/course-dialog.component';
import { CourseUserDialogComponent } from '../course-user-dialog/course-user-dialog.component';
import { CoursesService } from '../../services/course/courses.service';
import { LayoutService } from './../../../core/layout/layout.service';
import { NavLink } from '../../../shared/models/nav-link';
import { CourseEntityService } from '../../../store/course/course-entity.service';
import { TeacherEntityService } from './../../../store/teacher/teacher-entity.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
})
export class CourseComponent implements OnInit {
  isHandset$: Observable<boolean>;
  course$: Observable<gapi.client.classroom.Course>;
  courses$: Observable<gapi.client.classroom.Course[]>;
  teachers$: Observable<gapi.client.classroom.Teacher[]>;
  owner$: Observable<gapi.client.classroom.Teacher>;
  courseId: string;
  ownerId: string;
  faHouseUser = faHouseUser;
  faBellSlash = faBellSlash;
  faBriefcase = faBriefcase;
  faAt = faAt;
  faEdit = faEdit;
  faPaperPlane = faPaperPlane;
  faGoogleDrive = faGoogleDrive;
  faUserCheck = faUserCheck;
  faUserPlus = faUserPlus;
  faUserTimes = faUserTimes;
  course: gapi.client.classroom.Course;
  teachers: gapi.client.classroom.Teacher[];
  owner: gapi.client.classroom.Teacher;
  linkText: boolean = false;
  courseLinks: NavLink[] = [
    { name: 'Alumnos', route: ['students'], icon: faUserGraduate },
    { name: 'Profesores', route: ['teachers'], icon: faUserTie },
    { name: 'Trabajos', route: ['courseworks'], icon: faBriefcase },
    { name: 'Avisos', route: ['announcements'], icon: faBullhorn },
  ]
  constructor(
    private route: ActivatedRoute,
    private teacherEntityService: TeacherEntityService,
    private courseEntityService: CourseEntityService,
    private coursesService: CoursesService,
    private layoutService: LayoutService,
    private dialog: MatDialog,
  ) {
    this.isHandset$ = this.layoutService.isHandset$;
    this.courseId = this.route.snapshot.paramMap.get('courseId');
    this.course$ = this.courseEntityService.entities$.pipe(
      map(courses => {
        this.course = courses.find(course => course.id == this.courseId);
        this.ownerId = this.course.ownerId;
        return courses.find(course => course.id == this.courseId);
      })
    );
    this.owner$ = this.teacherEntityService.entities$
      .pipe(
        map(teachers =>
          teachers.filter(x =>
            x.courseId == this.courseId
          ).find(y =>
            y.userId == this.ownerId
          )
        )
      );
  }
  ngOnInit() {
    this.reload();
  }
  reload() {

  }
  openCourseDialog(course: gapi.client.classroom.Course) {
    const dialogRef = this.dialog.open(CourseDialogComponent, {
      minWidth: '450px',
      minHeight: '550px',
      data: { ...course, isNew: false }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const patchCourse: gapi.client.classroom.Course = {
          id: result.id,
          name: result.name,
          section: result.section,
          room: result.room,
          guardiansEnabled: result.guardiansEnabled,
          courseState: result.courseState,
          description: result.description,
          descriptionHeading: result.descriptionHeading
        }
        this.courseEntityService.update(patchCourse);
      }
    });
  }
  openAddUserDialog(course?: gapi.client.classroom.Course) {
    const dialogRef = this.dialog.open(CourseUserDialogComponent, {
      width: '450px',
      data: { ...course, mail: 'me', isTeacher: false }
    });
    dialogRef.afterClosed().subscribe(async result => {
      if (result) {
        const profile = await this.coursesService.getUserProfile(result.mail);
        const preTeacher: gapi.client.classroom.Invitation = {
          userId: result.mail,
          courseId: result.id,
          role: result.isTeacher ? 'TEACHER' : 'STUDENT'
        }
        this.coursesService.createInvitation(preTeacher)
          .then(success =>
            console.log('invitation successfully created for ' + profile.name.givenName + ' as ' + success.role)
          )
        //const newTeacher = this.teacherEntityService.add(preTeacher)
        //const newTeacher = this.teachersService.addTeacher(result.id, result.mail)
        //this.teacherEntityService.add(teacher);
      }
    });
  }
}
