import { Component, Input, OnInit } from '@angular/core';

import { UserProfileEntityService } from '../../../store/user-profile/user-profile-entity.service';

@Component({
  selector: 'app-course-announcements',
  templateUrl: './course-announcements.component.html',
  styleUrls: ['./course-announcements.component.scss']
})
export class CourseAnnouncementsComponent implements OnInit {
  @Input() announcements: gapi.client.classroom.Announcement[];
  creator: gapi.client.classroom.UserProfile;
  isExpanded: boolean;
  constructor(
    private userProfileEntityService: UserProfileEntityService,
  ) {
  }

  ngOnInit(): void {

  }

  onExpand(userId: string) {
    this.userProfileEntityService.entities$.subscribe(users => {
      if (!users) {
        this.userProfileEntityService.getByKey(userId)
      }
      this.creator = users.find(x => x.id == userId);
    });

  }
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


