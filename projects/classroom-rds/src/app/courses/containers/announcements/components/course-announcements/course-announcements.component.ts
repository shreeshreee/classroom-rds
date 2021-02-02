import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { faBlind } from '@fortawesome/free-solid-svg-icons';

import { AnnouncementEntityService } from '@rds-store/announcement/announcement-entity.service';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-course-announcements',
  templateUrl: './course-announcements.component.html',
  styleUrls: ['./course-announcements.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class CourseAnnouncementsComponent implements OnInit {
  announcements$: Observable<gapi.client.classroom.Announcement[]>;
  creator: gapi.client.classroom.UserProfile;
  courseId: string;
  isLoading$: Observable<boolean>;
  faBlind = faBlind;
  constructor(
    private route: ActivatedRoute,
    private announcementEntityService: AnnouncementEntityService,
  ) {
    this.isLoading$ = this.announcementEntityService.loading$;
    this.courseId = this.route.parent.parent.snapshot.paramMap.get('courseId');
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


