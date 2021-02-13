import { Component, OnInit } from '@angular/core';

import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';

import { ThemeService } from '@rds-shared/services';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent implements OnInit {
  isDarkTheme: Observable<boolean>;
  faSun = faSun;
  faMoon = faMoon;
  constructor(
    private themeService: ThemeService
  ) { }

  ngOnInit(): void {
    this.isDarkTheme = this.themeService.isDarkTheme;
  }
  toggleDarkTheme(checked: boolean) {
    this.themeService.setDarkTheme(checked);
  }
}
