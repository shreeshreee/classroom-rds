import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { faBlind } from '@fortawesome/free-solid-svg-icons';

import { CourseWorkEntityService } from '@rds-store/course-work/course-work-entity-service.service';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-course-work',
  templateUrl: './course-work.component.html',
  styleUrls: ['./course-work.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseWorkComponent implements OnInit {
  courseWorks$: Observable<gapi.client.classroom.CourseWork[]>;
  courseId: string;
  isLoading$: Observable<boolean>;
  faBlind = faBlind;
  constructor(
    private route: ActivatedRoute,
    private courseWorkEntityService: CourseWorkEntityService,
  ) {
    this.isLoading$ = this.courseWorkEntityService.loading$;
    this.courseId = this.route.parent.parent.snapshot.paramMap.get('courseId');
  }

  ngOnInit(): void {
    this.courseWorks$ = this.courseWorkEntityService.entities$.pipe(
      map(courseWorks => {
        if (!courseWorks) {
          this.courseWorkEntityService.getWithQuery(this.courseId);
        }
        return courseWorks.filter(x => x.courseId == this.courseId);
      })
    );
  }
}

