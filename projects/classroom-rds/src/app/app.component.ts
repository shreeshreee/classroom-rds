import { Component, OnInit } from '@angular/core';

import { SeoService } from './shared/services';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Classroom RDS Administrator';
  constructor(
    private seoService: SeoService
  ) { }
  ngOnInit(): void {
    this.seoService.titleInit();
    this.seoService.generateTags({
      title: this.title,
      description: 'Angular web app for a school admin in Google Classroom.',
      image: 'assets/screenshots/screenshot02.png'
    });
  }
}
