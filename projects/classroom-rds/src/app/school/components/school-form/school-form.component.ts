import { ActivatedRoute } from '@angular/router';
import { Component, ChangeDetectionStrategy, Input, OnInit, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { faTrashAlt, faPlus } from '@fortawesome/free-solid-svg-icons';

import { User } from '@rds-auth/models/user.model';

import { Subject, Subscription } from 'rxjs';

import states from './states.json';

import { PhoneType } from '~/app/auth/models/user-parent.model';


@Component({
  selector: 'app-school-form',
  templateUrl: './school-form.component.html',
  styleUrls: ['./school-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SchoolFormComponent implements OnInit {
  @Input() user: Subject<User>;
  @Output() updatedUser: EventEmitter<Partial<User>> = new EventEmitter<Partial<User>>();
  phoneKeys;
  phoneEnum = PhoneType;
  statesNames: string[];
  municipiosNames: string[];
  studentForm: FormGroup;
  parentForm: FormGroup;
  showParentForm = false;
  raisedElev: number = 12;
  userSub: Subscription;
  faTrashAlt = faTrashAlt;
  faPlus = faPlus;
  private userId;
  changedUser: Subject<User>;
  constructor(
    private fb: FormBuilder,
  ) {
    this.statesNames = Object.keys(states);
    this.phoneKeys = Object.keys(this.phoneEnum).filter(Number);
  }
  ngOnChanges(changes: SimpleChanges) {
    //changedUser:SimpleChanges=changes.user;
    this.fillForm();
  }
  ngOnInit() {
    this.fillForm();
  }

  fillForm() {
    this.user.subscribe(user => {
      this.userId = user.id;
      this.studentForm = this.fb.group({
        curp: new FormControl(user.curp),
        niev: new FormControl(user.niev),
        dob: new FormControl(new Date(user.dob)),
        primaryEmail: new FormControl(user.primaryEmail),
        familyName: new FormControl(user.name.familyName),
        givenName: new FormControl(user.name.givenName),
        gender: new FormControl(user.gender),
        parents: this.fb.array(user.parents.map(parent => this.setParent(parent))),
      });
    });
  }

  onSubmit() {
    // get only updated values
    const postUser: Partial<User> = {};
    this.studentForm['_forEachChild']((control, name) => {
      if (control.dirty) {
        if (name != 'familyName' && name != 'givenName') {
          postUser[name] = control.value;
        }
      }
      postUser['id'] = this.userId;
    });

    console.log(postUser)
    this.updatedUser.emit(postUser);
  }
  onEstadoChange(estado) {
    this.municipiosNames = Object.values(states[estado]);
  }

  get parents(): FormArray {
    return this.studentForm.get('parents') as FormArray;
  }
  newParent(): FormGroup {
    return this.fb.group({
      userId: '',
      givenName: '',
      familyName: '',
      curp: '',
      gender: '',
      relationType: '',
      relationCustom: '',
      phones: [],
      email: '',
      streetAddress: '',
      neighborhood: '',
      city: '',
      postalCode: '',
      municipio: '',
      state: '',
    });
  }
  setParent(parent): FormGroup {
    return this.fb.group({
      userId: '',
      givenName: [parent.givenName],
      familyName: [parent.familyName],
      curp: [parent.curp],
      gender: [parent.gender],
      relationType: [parent.relationType],
      relationCustom: [parent.relationCustom],
      phones: [],
      email: [parent.email],
      streetAddress: [parent.streetAddress],
      neighborhood: [parent.neighborhood],
      city: [parent.city],
      postalCode: [parent.postalCode],
      municipio: [parent.municipio],
      state: [parent.state],
    });
  }
  addParent() {
    this.parents.push(this.newParent());
  }
  removeParent(j: number) {
    this.parents.removeAt(j);
  }
  get phones(): FormArray {
    return this.parents.get('phones') as FormArray;
  }
  newPhone(): FormGroup {
    return this.fb.group({
      value: '',
      type: '',
      primary: '',
      customType: '',
    })
  }
  addPhone() {
    this.phones.push(this.newPhone());
  }
  removeSkill(i: number) {
    this.phones.removeAt(i);
  }

}

