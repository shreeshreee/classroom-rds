import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding, OnInit } from '@angular/core';

import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { SeoService } from './shared/services';
import { ThemeService } from './shared/services/theme.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isDarkTheme: Observable<boolean>;
  isDark: boolean;
  defaultElevation = 0;
  raisedElevation = 12;
  title = 'Escuela RDS';
  constructor(
    private themeService: ThemeService,
    private seoService: SeoService,
    private overlay: OverlayContainer
  ) {

  }

  ngOnInit(): void {
    this.isDarkTheme = this.themeService.isDarkTheme;
    this.isDarkTheme.subscribe(isDark => {
      if (isDark) {
        this.overlay.getContainerElement().classList.add('dark-theme');
      } else {
        this.overlay.getContainerElement().classList.remove('dark-theme');
      }
    });
    this.seoService.titleInit();
    this.seoService.generateTags({
      title: this.title,
      description: 'Aplicación de servicios escolares de la escuela Rafael Díaz Serdán',
      image: 'assets/screenshots/screenshot02.png'
    });
  }
  toggleDarkTheme(checked: boolean) {
    this.themeService.setDarkTheme(checked);
  }
}
