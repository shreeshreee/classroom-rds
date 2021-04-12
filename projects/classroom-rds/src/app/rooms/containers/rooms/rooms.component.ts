import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { faGripVertical, faLevelDownAlt, faPlus } from '@fortawesome/free-solid-svg-icons';

import { props } from '@ngrx/store';

import { SchoolService } from '@rds-school/services/school.service';

import { Subscription } from 'rxjs';

import { Room } from '../../models/room.model';
import { RoomService } from '../../services/room.service';
import { RoomDialogComponent } from '../../components/room-dialog/room-dialog.component';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {
  rooms: Room[];
  sub: Subscription;
  lastQuestionIndex: number;
  faPlus = faPlus;
  faEdit = faEdit;
  faGripVertical = faGripVertical;
  constructor(
    private schoolService: SchoolService,
    private roomService: RoomService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.sub = this.roomService
      .getRooms()
      .subscribe(rooms => (this.rooms = rooms));
  }

  openRoomDialog(room?: Room): void {
    const newRoom: Partial<Room> = {
      priority: this.rooms.length,
    }
    const dialogRef = this.dialog.open(RoomDialogComponent, {
      width: '450px',
      data: room ? { ...room, isNew: false } : { ...newRoom, isNew: true }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result)
        if (result.isNew) {
          this.roomService.createRoom({
            name: result.name,
            status: result.status,
            description: result.description || null,
            grade: result.grade || null,
            priority: this.rooms.length,
            students: [],
            courses: []
          });
        } else {
          this.roomService.updateRoom(result.id, result.name, result.description, result.grade, result.status, result.priority);
          result.students.forEach(student => {
            this.schoolService.updateUser(student.id, { grade: result.grade })
          });
        }

      }
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
