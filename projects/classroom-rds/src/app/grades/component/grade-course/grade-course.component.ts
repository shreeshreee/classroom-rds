import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

import { faBlind } from '@fortawesome/free-solid-svg-icons';

import { StudentEntityService } from '@rds-store/student/student-entity.service';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { StudentGrade } from './../../models/student-grade.model';

@Component({
  selector: 'app-grade-course',
  templateUrl: './grade-course.component.html',
  styleUrls: ['./grade-course.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GradeCourseComponent implements OnInit {
  students$: Observable<gapi.client.classroom.Student[]>;
  courseId: string;
  loading$: Observable<boolean>;
  faBlind = faBlind;
  eventGrade: StudentGrade;
  courseGrade: StudentGrade[] = [];
  constructor(
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private studentEntityService: StudentEntityService,
  ) {
    this.courseId = this.route.snapshot.paramMap.get('courseId');
    console.log(this.courseId);
    this.loading$ = this.studentEntityService.loading$;
    this.students$ = this.studentEntityService.entities$.pipe(
      map(students => {
        if (!students) {
          this.studentEntityService.getWithQuery(this.courseId);
        }
        return students.filter(x => x.courseId == this.courseId);
      }),
    );
    this.students$.subscribe((students) => {
      students.map(student => {
        return this.courseGrade.push({
          courseId: this.courseId,
          studentId: student.userId,
          studentName: student.profile.name.fullName,
        });
      });
    });

    console.log(this.courseGrade)
  }
  ngOnInit(): void {

  }
}
