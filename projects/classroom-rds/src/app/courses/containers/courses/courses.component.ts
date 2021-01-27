import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { faBullhorn, faListAlt, faPlus } from '@fortawesome/free-solid-svg-icons';

import { Observable, Subscription } from 'rxjs';

import { AnnouncementDialogComponent } from '../../components/announcement-dialog/announcement-dialog.component';
import { CourseDialogComponent } from '../../components/course-dialog/course-dialog.component';
import { CoursesService } from '../../services/course/courses.service';
import { CourseEntityService } from '../../../store/course/course-entity.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class CoursesComponent implements OnInit {
  courses: gapi.client.classroom.Course[];
  courses$: Observable<gapi.client.classroom.Course[]>;

  /*  isLoading$: Observable<boolean>;
   public loading: boolean;
   public error$: Observable<boolean>;
  */
  faPlus = faPlus;
  faListAlt = faListAlt;
  faBullhorn = faBullhorn;
  constructor(
    private dialog: MatDialog,
    private coursesService: CoursesService,
    private courseEntityService: CourseEntityService,
  ) {

  }
  ngOnInit(): void { }
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
            const response = await this.coursesService.createAnnouncement(
              result.newAnnouncement as gapi.client.classroom.Announcement, courseId);
          });
        });
      }
    });
  }
}
