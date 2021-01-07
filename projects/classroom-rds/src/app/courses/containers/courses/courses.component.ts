import { Component, OnInit, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { faBullhorn, faPlus } from '@fortawesome/free-solid-svg-icons';

import { select, Store } from '@ngrx/store';

import { Observable, Subject } from 'rxjs';
import { map, takeUntil, mergeMap } from 'rxjs/operators';

import { CourseEntityService } from '../../services/course-entity.service';
import { CoursesService } from '../../services/courses.service';
import { AppState } from '../../../store/app.state';
import { AnnouncementDialogComponent } from '../../components/announcement-dialog/announcement-dialog.component';
import { AnnouncementResultComponent } from '../../components/announcement-result/announcement-result.component';
import { CourseDialogComponent } from '../../components/course-dialog/course-dialog.component';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class CoursesComponent implements OnInit {
  courses$: Observable<gapi.client.classroom.Course[]>;
  isLoading$: Observable<boolean>;
  courses: gapi.client.classroom.Course[];
  faPlus = faPlus;
  faBullhorn = faBullhorn;
  constructor(
    private coursesService: CoursesService,
    private coursesEntityService: CourseEntityService,
    private dialog: MatDialog,
  ) { }
  ngOnInit(): void {
    this.reload();
  }
  reload() {
    this.courses$ = this.coursesEntityService.entities$.pipe(
      map(courses => courses.filter(course => course.courseState == 'ACTIVE')),
    );
  }
  openCreateCourseDialog() {
    let course: gapi.client.classroom.Course = {};
    /* course = {
      name: '',
      section: '',
      room: '',
      courseState: 'PROVISIONED',
      description: '',
      descriptionHeading: '',

      ownerId: '',
      guardiansEnabled: true
    }; */
    const dialogRef = this.dialog.open(CourseDialogComponent, {
      minWidth: '450px',
      minHeight: '550px',
      data: { course, isNew: true }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.coursesService.createCourse(result.course);
      }
    });
  }

  openCreateAnnouncementDialog() {
    let success: any[] = [];
    let fail: any[] = [];
    let results: any[] = [];
    /* let announcementsResult: any[] = []; */
    let courses: gapi.client.classroom.Course[] = [];
    this.coursesService.getCoursesList(null, null, ['ACTIVE']).then(res => courses = res);
    const newAnnouncement: gapi.client.classroom.Announcement = {
      text: '',
      materials: [],
      state: 'DRAFT',
      assigneeMode: 'ALL_STUDENTS'
    };
    const dialogRef = this.dialog.open(AnnouncementDialogComponent, {
      minWidth: '450px',
      data: { newAnnouncement, isNew: true, section: ''/* , announcementsStates: [] */ }
    });
    dialogRef.afterClosed().subscribe(async result => {
      if (result) {
        const cor = courses.filter(x => result.section.includes(x.section));
        cor.map(async course => {
          const response = await this.coursesService.createSchoolAnnouncement(
            result.newAnnouncement as gapi.client.classroom.Announcement, course.id);
          results.push({ ...response, courseName: course.name });
        });
        console.log(results);
        const dialogResult = this.dialog.open(AnnouncementResultComponent, {
          minWidth: '450px',
          maxHeight: '600px',
          data: results
        });
      }
    });
  }



}
