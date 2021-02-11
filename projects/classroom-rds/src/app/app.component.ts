import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { SeoService } from './shared/services';
import { ThemeService } from './shared/services/theme.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isDarkTheme: Observable<boolean>;
  title = 'Escuela RDS';
  constructor(
    private themeService: ThemeService,
    private seoService: SeoService,
  ) {

  }

  ngOnInit(): void {
    this.isDarkTheme = this.themeService.isDarkTheme;

    this.seoService.titleInit();
    this.seoService.generateTags({
      title: this.title,
      description: 'Portal de información y servicios escolares de la Escuela Rafael Díaz Serdán',
      image: 'assets/screenshots/screenshot02.png'
    });
  }
  toggleDarkTheme(checked: boolean) {
    this.themeService.setDarkTheme(checked);
  }
}
