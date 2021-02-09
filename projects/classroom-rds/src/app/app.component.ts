import { Component, OnInit } from '@angular/core';

import { SeoService } from './shared/services';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Escuela RDS';
  constructor(
    private seoService: SeoService,
  ) {

  }
  ngOnInit(): void {
    this.seoService.titleInit();
    this.seoService.generateTags({
      title: this.title,
      description: 'Portal de información y servicios escolares de la Escuela Rafael Díaz Serdán',
      image: 'assets/screenshots/screenshot02.png'
    });

  }


}
