import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

import { Group, UserDomain } from '@rds-admin/models/users.model';
import { AdminApiService, GroupsService } from '@rds-admin/services';
import { GroupDialogComponent } from '@rds-admin/components/';

import { AuthService } from '@rds-auth/services/auth.service';

import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupsComponent implements OnInit {
  users: UserDomain[];
  unassignedTasks: UserDomain[];
  isLoading$: Observable<boolean>;
  groups: Group[] = [];
  sub: Subscription;
  unassignedUser: UserDomain;
  lastGroupIndex: number;
  groupContainer: Observable<Group[]>;
  group: Group;
  form: FormGroup;
  stringParam: string;
  constructor(
    private adminApiService: AdminApiService,
    private authService: AuthService,
    private groupService: GroupsService,
    public dialog: MatDialog,
    private formBuilder: FormBuilder
  ) {
    this.sub = this.groupService.get().pipe(
      map(groups => {
        if (groups && groups.length !== 0) {
          const index: number = Number(groups[groups.length - 1].id);
          this.lastGroupIndex = index;
        } else {
          this.lastGroupIndex = 0;
        }
        return groups;
      })
    ).subscribe(groups => {
      this.groups = groups;
    });
    this.initializeForm();
  }

  initializeForm() {
    this.form = this.formBuilder.group({
      selectedDomain: new FormControl('rafaeldiazserdan.net', { validators: [Validators.required], updateOn: 'change' }),
    });
  }

  ngOnInit(): void {
    this.form.get('selectedDomain').valueChanges.subscribe(domain => this.stringParam = domain);

  }
  drop(event: CdkDragDrop<UserDomain[]>): void {
    moveItemInArray(this.groups, event.previousIndex, event.currentIndex);
    this.groupService.sortGroups(this.groups);
  }
  studentDrop(event: CdkDragDrop<UserDomain[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
    this.groupService.updateStudents(this.group.id, this.group.students);
  }



  openGroupDialog(group?: Group): void {
    const newGroup = {
      priority: this.groups.length,
    };
    const dialogRef = this.dialog.open(GroupDialogComponent, {
      width: '400px',
      data: group
        ? { group: { ...group }, isNew: false, }
        : {
          group: newGroup, isNew: true,
        }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (result.isNew) {
          //this.store.dispatch(new fromQuiz.QuizAdded({ quiz: result.quiz }));
          this.groupService.createGroup(result.group)
        } else {
          //this.store.dispatch(new fromQuiz.QuizEdited({ quiz: result.quiz }));
          this.groupService.updateGroupInfo(result.group)
        }
      }
    });
  }
  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
  trackByFunction(index: any) {
    return index;
  }
}
