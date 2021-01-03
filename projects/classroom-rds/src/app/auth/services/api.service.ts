import { Injectable } from '@angular/core';

import { GoogleApiService } from 'ng-gapi';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  isLoaded: boolean = false;
  constructor(
    private gapiService: GoogleApiService
  ) {
    this.gapiService.onLoad().subscribe((loaded) => {
      this.isLoaded = loaded;
      const myBatch: gapi.client.HttpBatch = new gapi.client.HttpBatch();
      /* myBatch.add(
        // your request
      ); */
    });
  }


}
