import { Component, Input, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input() isOnline: boolean;
  @Input() isHandset$: Observable<boolean>;
  constructor() { }

  ngOnInit(): void {
  }

}
