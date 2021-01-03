// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyAlAPUXjpBlZY2WwatG1k6LOuAlGACD9gY',
    authDomain: 'classroom-rds.firebaseapp.com',
    databaseURL: 'https://classroom-rds-default-rtdb.firebaseio.com',
    projectId: 'classroom-rds',
    storageBucket: 'classroom-rds.appspot.com',
    messagingSenderId: '667520930692',
    appId: '1:667520930692:web:d235ece7ae0128a13383d1',
    measurementId: 'G-203FPT1WXQ'
  },
  gapiClientConfig: {
    client_id: '667520930692-rc4oojvic7pog105i5todq0fb5pvntep.apps.googleusercontent.com',
    discoveryDocs: [''],
    scope: [
      'openid',
      'email',
      'profile'
    ].join(' ')
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
