import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AnnouncementEntityService } from '../../../store/announcement/announcement-entity.service';

@Component({
  selector: 'app-course-announcements',
  templateUrl: './course-announcements.component.html',
  styleUrls: ['./course-announcements.component.scss'],


})
export class CourseAnnouncementsComponent implements OnInit {
  announcements$: Observable<gapi.client.classroom.Announcement[]>;
  creator: gapi.client.classroom.UserProfile;
  courseId: string;
  constructor(
    private route: ActivatedRoute,
    private announcementEntityService: AnnouncementEntityService,
  ) {
    this.courseId = this.route.snapshot.paramMap.get('courseId');
  }

  ngOnInit(): void {
    this.announcements$ = this.announcementEntityService.entities$.pipe(
      map(announcements => {
        if (!announcements) {
          this.announcementEntityService.getWithQuery(this.courseId);
        }
        return announcements.filter(x => x.courseId == this.courseId);
      })
    );
  }
}


