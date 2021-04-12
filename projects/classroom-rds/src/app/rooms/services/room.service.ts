import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { Observable } from 'rxjs';

import { Room, RoomCourses, UserStudent } from '../models/room.model';
import { ClassState } from '../../school/models/class.model';



@Injectable()
export class RoomService {
  private roomsCollection: string = 'groups';
  constructor(
    private afs: AngularFirestore) { }

  /**
   * Creates a new quiz for the current user
   */
  async createRoom(data: Room) {
    const fsKey = this.afs.createId();
    return this.afs.collection(`${this.roomsCollection}`).doc(fsKey).set({
      ...data,
      id: fsKey
    });
  }
  /**
     * Updates room
     */
  updateRoom(id: string, name: string, description: string, grade: number, status: ClassState, priority: number): Promise<void> {
    return this.afs
      .collection(`${this.roomsCollection}`)
      .doc(id)
      .update({
        name,
        description,
        grade,
        status,
        priority
      });
  }
  /**
   * Get all quizs owned by current user
   */
  getRooms(): Observable<any> {
    return this.afs
      .collection<Room>(`${this.roomsCollection}`, ref =>
        ref.orderBy('priority')
      )
      .valueChanges({ idField: 'id' });
  }

  /**
   * Delete quiz
   */
  deleteRoom(roomId: string): Promise<void> {
    return this.afs
      .collection(`${this.roomsCollection}`)
      .doc(roomId)
      .delete();
  }

  /**
   * Updates students on a group
   */
  updateStudents(roomId: string, students: UserStudent[]): Promise<void> {
    return this.afs
      .collection(`${this.roomsCollection}`)
      .doc(roomId)
      .update({ students });
  }

  /**
   * Remove a specifc task from the quiz
   */
  removeStudent(roomId: string, student: UserStudent): Promise<void> {
    return this.afs
      .collection(`${this.roomsCollection}`)
      .doc(roomId)
      .update({
        students: firebase.firestore.FieldValue.arrayRemove(student)
      });
  }

  /**
   * Updates the courses on a group
   */
  updateCourses(roomId: string, courses: RoomCourses[]): Promise<void> {
    return this.afs
      .collection(`${this.roomsCollection}`)
      .doc(roomId)
      .update({ courses });
  }
  /**
     * Remove a specifc task from the quiz
     */
  removeCourse(roomId: string, course: RoomCourses): Promise<void> {
    return this.afs
      .collection(`${this.roomsCollection}`)
      .doc(roomId)
      .update({
        courses: firebase.firestore.FieldValue.arrayRemove(course)
      });
  }
}
