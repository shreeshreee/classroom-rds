import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CourseWorkEntityService } from './../../../store/course-work/course-work-entity-service.service';
@Component({
  selector: 'app-course-work',
  templateUrl: './course-work.component.html',
  styleUrls: ['./course-work.component.scss'],
})
export class CourseWorkComponent implements OnInit {
  courseWorks$: Observable<gapi.client.classroom.CourseWork[]>;
  courseId: string;
  constructor(
    private route: ActivatedRoute,
    private courseWorkEntityService: CourseWorkEntityService,
  ) {
    this.courseId = this.route.snapshot.paramMap.get('courseId');
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

