import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AnnouncementEntityService } from '../../../store/announcement/announcement-entity.service';
import { StudentEntityService } from '../../../store/student/student-entity.service';

@Component({
  selector: 'app-course-announcements',
  templateUrl: './course-announcements.component.html',
  styleUrls: ['./course-announcements.component.scss']
})
export class CourseAnnouncementsComponent implements OnInit {
  @Input() announcements: gapi.client.classroom.Announcement[];
  creator: gapi.client.classroom.UserProfile;

  loading$: Observable<boolean>;
  announcements$: Observable<gapi.client.classroom.Announcement[]>;
  courseId: string;
  constructor(
    private route: ActivatedRoute,
    private announcementEntityService: AnnouncementEntityService,
  ) { }

  ngOnInit(): void {
    /* this.courseId = this.route.snapshot.paramMap.get('courseId');
    this.loading$ = this.announcementEntityService.loading$;
    this.announcements$ = this.announcementEntityService.entities$
      .pipe(
        map(announcement => {
          if (!announcement) {
            this.announcementEntityService.getWithQuery(this.courseId);
          };
          return announcement.filter(x => x.courseId === this.courseId);
        })
      ); */
  }

}
