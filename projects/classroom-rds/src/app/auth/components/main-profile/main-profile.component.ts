import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

import { UpdatedUser, User } from './../../models/user.model';

@Component({
  selector: 'app-main-profile',
  templateUrl: './main-profile.component.html',
  styleUrls: ['./main-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainProfileComponent implements OnInit {
  @Input() user: User;
  @Output() profileUpdate = new EventEmitter<UpdatedUser>();
  updateProfileForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.updateProfileForm = this.fb.group({
      name: new FormControl(this.user.name),
      photoUrl: new FormControl(this.user.photoUrl)
    });
  }

  onProfileUpdate() {
    console.log('do click')
    const newUser: UpdatedUser = {
      name: this.updateProfileForm.get('name').value,
      photoUrl: this.updateProfileForm.get('photoUrl').value,
      id: this.user.id
    };
    this.profileUpdate.emit(newUser);
  }

}
