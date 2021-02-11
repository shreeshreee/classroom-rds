import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { faPlus, faUserPlus, faBullhorn } from '@fortawesome/free-solid-svg-icons';

import { Store, select } from '@ngrx/store';
import { QueryParams } from '@ngrx/data';

import * as fromAuthSelectors from '@rds-auth/state/auth.selectors';

import { AppState } from '@rds-store/app.state';

import { User } from '@rds-auth/models/user.model';

import { CourseEntityService } from '@rds-store/course/course-entity.service';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CourseState } from './../classroom/models/classroom.enum';
import { AnnouncementsService } from './../classroom/announcements/services/announcements.service';
import { AnnouncementDialogComponent } from '../classroom/announcements/components/announcement-dialog/announcement-dialog.component';
import { CourseDialogComponent } from '../classroom/courses/components/course-dialog/course-dialog.component';


@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GradesComponent implements OnInit {
  user$: Observable<User>;
  userProfile$: Observable<gapi.client.classroom.UserProfile>;
  courses$: Observable<gapi.client.classroom.Course[]>;
  isLoaded$: Observable<boolean>;
  userId: string;
  isOnline$: Observable<boolean>;
  isAdmin$: Observable<boolean>;
  isTeacher$: Observable<boolean>;
  loading$: Observable<boolean>;
  courseStates: CourseState;
  faPlus = faPlus;
  faUserPlus = faUserPlus;
  faBullhorn = faBullhorn;
  constructor(
    private courseEntityService: CourseEntityService,
    private store: Store<AppState>,
    private dialog: MatDialog,
    private announcementsService: AnnouncementsService,
  ) {
    this.isOnline$ = this.store.pipe(select(fromAuthSelectors.isLoggedIn));
    this.store.pipe(select(fromAuthSelectors.selectUser)).subscribe(user => this.userId = this.userId = user.id);
    this.isAdmin$ = this.store.pipe(select(fromAuthSelectors.isAdmin));
    this.isTeacher$ = this.store.pipe(select(fromAuthSelectors.isTeacher));
  }

  ngOnInit(): void {
    this.store.select(fromAuthSelectors.selectUser).pipe(map(user => this.userId = user.id));
    const queryParams: QueryParams = { teacherId: this.userId, courseStates: 'ACTIVE' };
    this.loading$ = this.courseEntityService.loading$;
    this.courses$ = this.courseEntityService.entities$.pipe(
      map(courses => {
        if (!courses) {
          this.courseEntityService.getWithQuery(queryParams)
        }
        return courses.filter(x => x.ownerId == this.userId).filter(y => y.courseState == 'ACTIVE')
      })
    );
  }
  openCreateCourseDialog() {
    let course: gapi.client.classroom.Course = {};
    const dialogRef = this.dialog.open(CourseDialogComponent, {
      minWidth: '450px',
      minHeight: '550px',
      data: { course, isNew: true }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.courseEntityService.add(result.course);
      }
    });
  }

  openCreateAnnouncementDialog() {
    const newAnnouncement: gapi.client.classroom.Announcement = {
      text: '',
      materials: [],
      state: 'DRAFT',
      assigneeMode: 'ALL_STUDENTS'
    };
    const dialogRef = this.dialog.open(AnnouncementDialogComponent, {
      minWidth: '450px',
      data: { newAnnouncement, isNew: true, section: '' }
    });
    dialogRef.afterClosed().subscribe(async result => {
      if (result) {
        this.courseEntityService.keys$.subscribe((courseIds: string[]) => {
          courseIds.map(async (courseId: string) => {
            const response = await this.announcementsService.createAnnouncement(
              result.newAnnouncement as gapi.client.classroom.Announcement, courseId);
          });
        });
      }
    });
  }
}
