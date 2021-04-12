import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { faEdit } from '@fortawesome/free-regular-svg-icons';

import { SchoolService } from '@rds-school/services/school.service';

import { UserEntityService } from '@rds-store/user/user-entity.service';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CourseDialogComponent } from '../course-dialog/course-dialog.component';
import { UserRoomDialogComponent } from '../user-room-dialog/user-room-dialog.component';
import { RoomCourses } from '../../models/room.model';
import { UserStudent } from '../../models/room.model';
import { RoomService } from '../../services/room.service';
import { UserProfilesService } from '../../../classroom/user-profiles/services/user-profiles.service';

import { User } from '~/app/auth/models/user.model';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent {
  @Input() room;
  faEdit = faEdit;
  user: UserStudent;
  teachers$: Observable<User[]>;
  loading$: Observable<boolean>;
  studentDrop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.room.students, event.previousIndex, event.currentIndex);
    this.roomService.updateStudents(this.room.id, this.room.students);
  }
  courseDrop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.room.courses, event.previousIndex, event.currentIndex);
    this.roomService.updateCourses(this.room.id, this.room.courses);
  }

  openDialog(student?: UserStudent, idx?: number): void {
    const newStudent: UserStudent = { email: '', label: 'blue' };
    const dialogRef = this.dialog.open(UserRoomDialogComponent, {
      width: '500px',
      data: student
        ? { student: { ...student }, isNew: false, roomId: this.room.id, idx }
        : { student: newStudent, isNew: true }
    });

    dialogRef.afterClosed().subscribe(async result => {
      if (result) {
        if (result.isNew) {
          console.log(result)
          this.user = await this.userProfilesService.getUserProfile(result.student.email).then(user => result.student = {
            id: user.id,
            fullName: user.name.fullName,
            email: user.emailAddress,
            label: result.student.label
          });
          this.roomService.updateStudents(this.room.id, [
            ...this.room.students,
            result.student
          ]);
        } else {
          const update = this.room.students;
          update.splice(result.idx, 1, result.student);
          this.roomService.updateStudents(this.room.id, this.room.students);
        }
        this.room.students.forEach(student => {
          this.schoolService.updateUser(student.id, { grade: this.room.grade })

        });
      }
    });
  }
  openCoursesDialog(course?: RoomCourses, idx?: number): void {
    const newCourse: RoomCourses = { name: '', priority: this.room.courses ? this.room.courses.length : 0, teacher: { id: '', name: '', photoUrl: '' } }
    const dialogRef = this.dialog.open(CourseDialogComponent, {
      width: '500px',
      data: course
        ? { course: { ...course }, isNew: false, roomId: this.room.id, idx }
        : { course: { ...newCourse }, isNew: true }
    });
    dialogRef.afterClosed().subscribe(async result => {
      if (result) {
        if (result.isNew) {

          console.log(result)
          this.roomService.updateCourses(this.room.id, [
            ...this.room.courses,
            {
              name: result.course.name,
              priority: result.course.priority,
              teacher: result.teacher,
            }
          ]);
        } else {
          const update = this.room.courses;
          update.splice(result.idx, 1, result.course);
          this.roomService.updateCourses(this.room.id, this.room.courses);
        }
        /* this.room.students.forEach(student => {
          this.schoolService.updateUser(student.id, { grade: this.room.grade })

        }); */
      }
    });
  }
  handleDelete() {
    this.roomService.deleteRoom(this.room.id);
  }

  constructor(
    private schoolService: SchoolService,
    private userProfilesService: UserProfilesService,
    private roomService: RoomService,
    private dialog: MatDialog
  ) {

  }
}
