import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { CourseDialogComponent } from '@rds-classroom/courses/components/course-dialog/course-dialog.component';

import { Observable } from 'rxjs';

import { ThemeService } from '~/app/shared/services';

@Component({
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit {
  isDarkTheme: Observable<boolean>;
  faSun = faSun;
  faMoon = faMoon;
  faTimes = faTimes;

  constructor(
    private dialogRef: MatDialogRef<CourseDialogComponent>,
    private themeService: ThemeService,
    @Inject(MAT_DIALOG_DATA) public data
  ) { }

  toggleDarkTheme(checked: boolean) {
    this.themeService.setDarkTheme(checked);
  }
  ngOnInit(): void {
    this.isDarkTheme = this.themeService.isDarkTheme;
  }
  close() { }
}
